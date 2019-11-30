/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return d(f), e
					},
					set: function (a) {
						d(f), e = a
					}
				})
			} catch (g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function () {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function () {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function (b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function (b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function (b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function (a) {
			var b = Array.prototype.slice.call(arguments);
			if ("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch (c) {
				a = a.replace(v, function (a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch (e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function (a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function (a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function () {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function () {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function (a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for (g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for (g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function (b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function (b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if (a.merge(k, a.buildFragment(b, c).childNodes), e)
				for (i = function (a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function (b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function (a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function (b, c) {
			a.fn[c] = function () {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function (b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function (c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function (b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function (b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function (a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function (b, c) {
			a.event.special[c] = {
				setup: function () {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function () {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function () {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function () {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if (a.fn.andSelf = function () {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function (a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function (b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function () {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
						a.each(P, function (f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function () {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function () {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function () {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 08.03.2018
*********************************************/
/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.9
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.skinkers.com/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function (a) {
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define(["jquery"], a)
	} else {
		a(jQuery)
	}
}(function (f) {
	var y = "1.6.9",
		p = "left",
		o = "right",
		e = "up",
		x = "down",
		c = "in",
		A = "out",
		m = "none",
		s = "auto",
		l = "swipe",
		t = "pinch",
		B = "tap",
		j = "doubletap",
		b = "longtap",
		z = "hold",
		E = "horizontal",
		u = "vertical",
		i = "all",
		r = 10,
		g = "start",
		k = "move",
		h = "end",
		q = "cancel",
		a = "ontouchstart" in window,
		v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		C = "TouchSwipe";
	var n = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: true,
		triggerOnTouchLeave: false,
		allowPageScroll: "auto",
		fallbackToMouseEvents: true,
		excludedElements: "label, button, input, select, textarea, a, .noSwipe",
		preventDefaultEvents: true
	};
	f.fn.swipetp = function (H) {
		var G = f(this),
			F = G.data(C);
		if (F && typeof H === "string") {
			if (F[H]) {
				return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
			} else {
				f.error("Method " + H + " does not exist on jQuery.swipetp")
			}
		} else {
			if (!F && (typeof H === "object" || !H)) {
				return w.apply(this, arguments)
			}
		}
		return G
	};
	f.fn.swipetp.version = y;
	f.fn.swipetp.defaults = n;
	f.fn.swipetp.phases = {
		PHASE_START: g,
		PHASE_MOVE: k,
		PHASE_END: h,
		PHASE_CANCEL: q
	};
	f.fn.swipetp.directions = {
		LEFT: p,
		RIGHT: o,
		UP: e,
		DOWN: x,
		IN: c,
		OUT: A
	};
	f.fn.swipetp.pageScroll = {
		NONE: m,
		HORIZONTAL: E,
		VERTICAL: u,
		AUTO: s
	};
	f.fn.swipetp.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: i
	};

	function w(F) {
		if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
			F.allowPageScroll = m
		}
		if (F.click !== undefined && F.tap === undefined) {
			F.tap = F.click
		}
		if (!F) {
			F = {}
		}
		F = f.extend({}, f.fn.swipetp.defaults, F);
		return this.each(function () {
			var H = f(this);
			var G = H.data(C);
			if (!G) {
				G = new D(this, F);
				H.data(C, G)
			}
		})
	}

	function D(a5, aw) {
		var aA = (a || d || !aw.fallbackToMouseEvents),
			K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
			az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
			V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
			T = aA ? null : "mouseleave",
			aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
		var ah = 0,
			aQ = null,
			ac = 0,
			a2 = 0,
			a0 = 0,
			H = 1,
			ar = 0,
			aK = 0,
			N = null;
		var aS = f(a5);
		var aa = "start";
		var X = 0;
		var aR = null;
		var U = 0,
			a3 = 0,
			a6 = 0,
			ae = 0,
			O = 0;
		var aX = null,
			ag = null;
		try {
			aS.bind(K, aO);
			aS.bind(aE, ba)
		} catch (al) {
			f.error("events not supported " + K + "," + aE + " on jQuery.swipetp")
		}
		this.enable = function () {
			aS.bind(K, aO);
			aS.bind(aE, ba);
			return aS
		};
		this.disable = function () {
			aL();
			return aS
		};
		this.destroy = function () {
			aL();
			aS.data(C, null);
			aS = null
		};
		this.option = function (bd, bc) {
			if (aw[bd] !== undefined) {
				if (bc === undefined) {
					return aw[bd]
				} else {
					aw[bd] = bc
				}
			} else {
				f.error("Option " + bd + " does not exist on jQuery.swipetp.options")
			}
			return null
		};

		function aO(be) {
			if (aC()) {
				return
			}
			if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
				return
			}
			var bf = be.originalEvent ? be.originalEvent : be;
			var bd, bg = bf.touches,
				bc = bg ? bg[0] : bf;
			aa = g;
			if (bg) {
				X = bg.length
			} else {
				be.preventDefault()
			}
			ah = 0;
			aQ = null;
			aK = null;
			ac = 0;
			a2 = 0;
			a0 = 0;
			H = 1;
			ar = 0;
			aR = ak();
			N = ab();
			S();
			if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
				aj(0, bc);
				U = au();
				if (X == 2) {
					aj(1, bg[1]);
					a2 = a0 = av(aR[0].start, aR[1].start)
				}
				if (aw.swipeStatus || aw.pinchStatus) {
					bd = P(bf, aa)
				}
			} else {
				bd = false
			}
			if (bd === false) {
				aa = q;
				P(bf, aa);
				return bd
			} else {
				if (aw.hold) {
					ag = setTimeout(f.proxy(function () {
						aS.trigger("hold", [bf.target]);
						if (aw.hold) {
							bd = aw.hold.call(aS, bf, bf.target)
						}
					}, this), aw.longTapThreshold)
				}
				ap(true)
			}
			return null
		}

		function a4(bf) {
			var bi = bf.originalEvent ? bf.originalEvent : bf;
			if (aa === h || aa === q || an()) {
				return
			}
			var be, bj = bi.touches,
				bd = bj ? bj[0] : bi;
			var bg = aI(bd);
			a3 = au();
			if (bj) {
				X = bj.length
			}
			if (aw.hold) {
				clearTimeout(ag)
			}
			aa = k;
			if (X == 2) {
				if (a2 == 0) {
					aj(1, bj[1]);
					a2 = a0 = av(aR[0].start, aR[1].start)
				} else {
					aI(bj[1]);
					a0 = av(aR[0].end, aR[1].end);
					aK = at(aR[0].end, aR[1].end)
				}
				H = a8(a2, a0);
				ar = Math.abs(a2 - a0)
			}
			if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
				aQ = aM(bg.start, bg.end);
				am(bf, aQ);
				ah = aT(bg.start, bg.end);
				ac = aN();
				aJ(aQ, ah);
				if (aw.swipeStatus || aw.pinchStatus) {
					be = P(bi, aa)
				}
				if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
					var bc = true;
					if (aw.triggerOnTouchLeave) {
						var bh = aZ(this);
						bc = F(bg.end, bh)
					}
					if (!aw.triggerOnTouchEnd && bc) {
						aa = aD(k)
					} else {
						if (aw.triggerOnTouchLeave && !bc) {
							aa = aD(h)
						}
					}
					if (aa == q || aa == h) {
						P(bi, aa)
					}
				}
			} else {
				aa = q;
				P(bi, aa)
			}
			if (be === false) {
				aa = q;
				P(bi, aa)
			}
		}

		function M(bc) {
			var bd = bc.originalEvent ? bc.originalEvent : bc,
				be = bd.touches;
			if (be) {
				if (be.length) {
					G();
					return true
				}
			}
			if (an()) {
				X = ae
			}
			a3 = au();
			ac = aN();
			if (bb() || !ao()) {
				aa = q;
				P(bd, aa)
			} else {
				if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
					bc.preventDefault();
					aa = h;
					P(bd, aa)
				} else {
					if (!aw.triggerOnTouchEnd && a7()) {
						aa = h;
						aG(bd, aa, B)
					} else {
						if (aa === k) {
							aa = q;
							P(bd, aa)
						}
					}
				}
			}
			ap(false);
			return null
		}

		function ba() {
			X = 0;
			a3 = 0;
			U = 0;
			a2 = 0;
			a0 = 0;
			H = 1;
			S();
			ap(false)
		}

		function L(bc) {
			var bd = bc.originalEvent ? bc.originalEvent : bc;
			if (aw.triggerOnTouchLeave) {
				aa = aD(h);
				P(bd, aa)
			}
		}

		function aL() {
			aS.unbind(K, aO);
			aS.unbind(aE, ba);
			aS.unbind(az, a4);
			aS.unbind(V, M);
			if (T) {
				aS.unbind(T, L)
			}
			ap(false)
		}

		function aD(bg) {
			var bf = bg;
			var be = aB();
			var bd = ao();
			var bc = bb();
			if (!be || bc) {
				bf = q
			} else {
				if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
					bf = h
				} else {
					if (!bd && bg == h && aw.triggerOnTouchLeave) {
						bf = q
					}
				}
			}
			return bf
		}

		function P(be, bc) {
			var bd, bf = be.touches;
			if ((J() || W()) || (Q() || aY())) {
				if (J() || W()) {
					bd = aG(be, bc, l)
				}
				if ((Q() || aY()) && bd !== false) {
					bd = aG(be, bc, t)
				}
			} else {
				if (aH() && bd !== false) {
					bd = aG(be, bc, j)
				} else {
					if (aq() && bd !== false) {
						bd = aG(be, bc, b)
					} else {
						if (ai() && bd !== false) {
							bd = aG(be, bc, B)
						}
					}
				}
			}
			if (bc === q) {
				ba(be)
			}
			if (bc === h) {
				if (bf) {
					if (!bf.length) {
						ba(be)
					}
				} else {
					ba(be)
				}
			}
			return bd
		}

		function aG(bf, bc, be) {
			var bd;
			if (be == l) {
				aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
				if (aw.swipeStatus) {
					bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
					if (bd === false) {
						return false
					}
				}
				if (bc == h && aW()) {
					aS.trigger("swipe", [aQ, ah, ac, X, aR]);
					if (aw.swipe) {
						bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
						if (bd === false) {
							return false
						}
					}
					switch (aQ) {
						case p:
							aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
							if (aw.swipeLeft) {
								bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case o:
							aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
							if (aw.swipeRight) {
								bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case e:
							aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
							if (aw.swipeUp) {
								bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case x:
							aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
							if (aw.swipeDown) {
								bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break
					}
				}
			}
			if (be == t) {
				aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
				if (aw.pinchStatus) {
					bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
					if (bd === false) {
						return false
					}
				}
				if (bc == h && a9()) {
					switch (aK) {
						case c:
							aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
							if (aw.pinchIn) {
								bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
							}
							break;
						case A:
							aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
							if (aw.pinchOut) {
								bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
							}
							break
					}
				}
			}
			if (be == B) {
				if (bc === q || bc === h) {
					clearTimeout(aX);
					clearTimeout(ag);
					if (Z() && !I()) {
						O = au();
						aX = setTimeout(f.proxy(function () {
							O = null;
							aS.trigger("tap", [bf.target]);
							if (aw.tap) {
								bd = aw.tap.call(aS, bf, bf.target)
							}
						}, this), aw.doubleTapThreshold)
					} else {
						O = null;
						aS.trigger("tap", [bf.target]);
						if (aw.tap) {
							bd = aw.tap.call(aS, bf, bf.target)
						}
					}
				}
			} else {
				if (be == j) {
					if (bc === q || bc === h) {
						clearTimeout(aX);
						O = null;
						aS.trigger("doubletap", [bf.target]);
						if (aw.doubleTap) {
							bd = aw.doubleTap.call(aS, bf, bf.target)
						}
					}
				} else {
					if (be == b) {
						if (bc === q || bc === h) {
							clearTimeout(aX);
							O = null;
							aS.trigger("longtap", [bf.target]);
							if (aw.longTap) {
								bd = aw.longTap.call(aS, bf, bf.target)
							}
						}
					}
				}
			}
			return bd
		}

		function ao() {
			var bc = true;
			if (aw.threshold !== null) {
				bc = ah >= aw.threshold
			}
			return bc
		}

		function bb() {
			var bc = false;
			if (aw.cancelThreshold !== null && aQ !== null) {
				bc = (aU(aQ) - ah) >= aw.cancelThreshold
			}
			return bc
		}

		function af() {
			if (aw.pinchThreshold !== null) {
				return ar >= aw.pinchThreshold
			}
			return true
		}

		function aB() {
			var bc;
			if (aw.maxTimeThreshold) {
				if (ac >= aw.maxTimeThreshold) {
					bc = false
				} else {
					bc = true
				}
			} else {
				bc = true
			}
			return bc
		}

		function am(bc, bd) {
			if (aw.preventDefaultEvents === false) {
				return
			}
			if (aw.allowPageScroll === m) {
				bc.preventDefault()
			} else {
				var be = aw.allowPageScroll === s;
				switch (bd) {
					case p:
						if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
							bc.preventDefault()
						}
						break;
					case o:
						if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
							bc.preventDefault()
						}
						break;
					case e:
						if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
							bc.preventDefault()
						}
						break;
					case x:
						if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
							bc.preventDefault()
						}
						break
				}
			}
		}

		function a9() {
			var bd = aP();
			var bc = Y();
			var be = af();
			return bd && bc && be
		}

		function aY() {
			return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
		}

		function Q() {
			return !!(a9() && aY())
		}

		function aW() {
			var bf = aB();
			var bh = ao();
			var be = aP();
			var bc = Y();
			var bd = bb();
			var bg = !bd && bc && be && bh && bf;
			return bg
		}

		function W() {
			return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
		}

		function J() {
			return !!(aW() && W())
		}

		function aP() {
			return ((X === aw.fingers || aw.fingers === i) || !a)
		}

		function Y() {
			return aR[0].end.x !== 0
		}

		function a7() {
			return !!(aw.tap)
		}

		function Z() {
			return !!(aw.doubleTap)
		}

		function aV() {
			return !!(aw.longTap)
		}

		function R() {
			if (O == null) {
				return false
			}
			var bc = au();
			return (Z() && ((bc - O) <= aw.doubleTapThreshold))
		}

		function I() {
			return R()
		}

		function ay() {
			return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
		}

		function a1() {
			return ((ac > aw.longTapThreshold) && (ah < r))
		}

		function ai() {
			return !!(ay() && a7())
		}

		function aH() {
			return !!(R() && Z())
		}

		function aq() {
			return !!(a1() && aV())
		}

		function G() {
			a6 = au();
			ae = event.touches.length + 1
		}

		function S() {
			a6 = 0;
			ae = 0
		}

		function an() {
			var bc = false;
			if (a6) {
				var bd = au() - a6;
				if (bd <= aw.fingerReleaseThreshold) {
					bc = true
				}
			}
			return bc
		}

		function aC() {
			return !!(aS.data(C + "_intouch") === true)
		}

		function ap(bc) {
			if (bc === true) {
				aS.bind(az, a4);
				aS.bind(V, M);
				if (T) {
					aS.bind(T, L)
				}
			} else {
				aS.unbind(az, a4, false);
				aS.unbind(V, M, false);
				if (T) {
					aS.unbind(T, L, false)
				}
			}
			aS.data(C + "_intouch", bc === true)
		}

		function aj(bd, bc) {
			var be = bc.identifier !== undefined ? bc.identifier : 0;
			aR[bd].identifier = be;
			aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
			aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
			return aR[bd]
		}

		function aI(bc) {
			var be = bc.identifier !== undefined ? bc.identifier : 0;
			var bd = ad(be);
			bd.end.x = bc.pageX || bc.clientX;
			bd.end.y = bc.pageY || bc.clientY;
			return bd
		}

		function ad(bd) {
			for (var bc = 0; bc < aR.length; bc++) {
				if (aR[bc].identifier == bd) {
					return aR[bc]
				}
			}
		}

		function ak() {
			var bc = [];
			for (var bd = 0; bd <= 5; bd++) {
				bc.push({
					start: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					},
					identifier: 0
				})
			}
			return bc
		}

		function aJ(bc, bd) {
			bd = Math.max(bd, aU(bc));
			N[bc].distance = bd
		}

		function aU(bc) {
			if (N[bc]) {
				return N[bc].distance
			}
			return undefined
		}

		function ab() {
			var bc = {};
			bc[p] = ax(p);
			bc[o] = ax(o);
			bc[e] = ax(e);
			bc[x] = ax(x);
			return bc
		}

		function ax(bc) {
			return {
				direction: bc,
				distance: 0
			}
		}

		function aN() {
			return a3 - U
		}

		function av(bf, be) {
			var bd = Math.abs(bf.x - be.x);
			var bc = Math.abs(bf.y - be.y);
			return Math.round(Math.sqrt(bd * bd + bc * bc))
		}

		function a8(bc, bd) {
			var be = (bd / bc) * 1;
			return be.toFixed(2)
		}

		function at() {
			if (H < 1) {
				return A
			} else {
				return c
			}
		}

		function aT(bd, bc) {
			return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
		}

		function aF(bf, bd) {
			var bc = bf.x - bd.x;
			var bh = bd.y - bf.y;
			var be = Math.atan2(bh, bc);
			var bg = Math.round(be * 180 / Math.PI);
			if (bg < 0) {
				bg = 360 - Math.abs(bg)
			}
			return bg
		}

		function aM(bd, bc) {
			var be = aF(bd, bc);
			if ((be <= 45) && (be >= 0)) {
				return p
			} else {
				if ((be <= 360) && (be >= 315)) {
					return p
				} else {
					if ((be >= 135) && (be <= 225)) {
						return o
					} else {
						if ((be > 45) && (be < 135)) {
							return x
						} else {
							return e
						}
					}
				}
			}
		}

		function au() {
			var bc = new Date();
			return bc.getTime()
		}

		function aZ(bc) {
			bc = f(bc);
			var be = bc.offset();
			var bd = {
				left: be.left,
				right: be.left + bc.outerWidth(),
				top: be.top,
				bottom: be.top + bc.outerHeight()
			};
			return bd
		}

		function F(bc, bd) {
			return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
		}
	}
}));
if (typeof (console) === 'undefined') {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () {};
}
if (window.tplogs == true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch (e) {}
	/*!
	 * VERSION: 1.19.1
	 * DATE: 2017-01-17
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	! function (a, b) {
		"use strict";
		var c = {},
			d = a.document,
			e = a.GreenSockGlobals = a.GreenSockGlobals || a;
		if (!e.TweenLite) {
			var f, g, h, i, j, k = function (a) {
					var b, c = a.split("."),
						d = e;
					for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
					return d
				},
				l = k("com.greensock"),
				m = 1e-10,
				n = function (a) {
					var b, c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c
				},
				o = function () {},
				p = function () {
					var a = Object.prototype.toString,
						b = a.call([]);
					return function (c) {
						return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
					}
				}(),
				q = {},
				r = function (d, f, g, h) {
					this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
					var i = [];
					this.check = function (j) {
						for (var l, m, n, o, p, s = f.length, t = s; --s > -1;)(l = q[f[s]] || new r(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : j && l.sc.push(this);
						if (0 === t && g) {
							if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
								if (e[n] = c[n] = o, p = "undefined" != typeof module && module.exports, !p && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
									return o
								});
								else if (p)
								if (d === b) {
									module.exports = c[b] = o;
									for (s in c) o[s] = c[s]
								} else c[b] && (c[b][n] = o);
							for (s = 0; s < this.sc.length; s++) this.sc[s].check()
						}
					}, this.check(!0)
				},
				s = a._gsDefine = function (a, b, c, d) {
					return new r(a, b, c, d)
				},
				t = l._class = function (a, b, c) {
					return b = b || function () {}, s(a, [], function () {
						return b
					}, c), b
				};
			s.globals = e;
			var u = [0, 0, 1, 1],
				v = t("easing.Ease", function (a, b, c, d) {
					this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
				}, !0),
				w = v.map = {},
				x = v.register = function (a, b, c, d) {
					for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
						for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
				};
			for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
					if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
					var b = this._type,
						c = this._power,
						d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
					return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
				}, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
			w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
			var y = t("events.EventDispatcher", function (a) {
				this._listeners = {}, this._eventTarget = a || this
			});
			h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
				e = e || 0;
				var f, g, h = this._listeners[a],
					k = 0;
				for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
				h.splice(k, 0, {
					c: b,
					s: c,
					up: d,
					pr: e
				})
			}, h.removeEventListener = function (a, b) {
				var c, d = this._listeners[a];
				if (d)
					for (c = d.length; --c > -1;)
						if (d[c].c === b) return void d.splice(c, 1)
			}, h.dispatchEvent = function (a) {
				var b, c, d, e = this._listeners[a];
				if (e)
					for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
						type: a,
						target: c
					}) : d.c.call(d.s || c))
			};
			var z = a.requestAnimationFrame,
				A = a.cancelAnimationFrame,
				B = Date.now || function () {
					return (new Date).getTime()
				},
				C = B();
			for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
			t("Ticker", function (a, b) {
				var c, e, f, g, h, k = this,
					l = B(),
					n = b !== !1 && z ? "auto" : !1,
					p = 500,
					q = 33,
					r = "tick",
					s = function (a) {
						var b, d, i = B() - C;
						i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
					};
				y.call(k), k.time = k.frame = 0, k.tick = function () {
					s(!0)
				}, k.lagSmoothing = function (a, b) {
					p = a || 1 / m, q = Math.min(b, p, 0)
				}, k.sleep = function () {
					null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
				}, k.wake = function (a) {
					null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
						return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
					}, k === i && (j = !0), s(2)
				}, k.fps = function (a) {
					return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
				}, k.useRAF = function (a) {
					return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
				}, k.fps(a), setTimeout(function () {
					"auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1)
				}, 1500)
			}), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
			var D = t("core.Animation", function (a, b) {
				if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, W) {
					j || i.wake();
					var c = this.vars.useFrames ? V : W;
					c.add(this, c._time), this.vars.paused && this.paused(!0)
				}
			});
			i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
			var E = function () {
				j && B() - C > 2e3 && i.wake(), setTimeout(E, 2e3)
			};
			E(), h.play = function (a, b) {
				return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
			}, h.pause = function (a, b) {
				return null != a && this.seek(a, b), this.paused(!0)
			}, h.resume = function (a, b) {
				return null != a && this.seek(a, b), this.paused(!1)
			}, h.seek = function (a, b) {
				return this.totalTime(Number(a), b !== !1)
			}, h.restart = function (a, b) {
				return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
			}, h.reverse = function (a, b) {
				return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
			}, h.render = function (a, b, c) {}, h.invalidate = function () {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, h.isActive = function () {
				var a, b = this._timeline,
					c = this._startTime;
				return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale
			}, h._enabled = function (a, b) {
				return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
			}, h._kill = function (a, b) {
				return this._enabled(!1, !1)
			}, h.kill = function (a, b) {
				return this._kill(a, b), this
			}, h._uncache = function (a) {
				for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
				return this
			}, h._swapSelfInParams = function (a) {
				for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
				return c
			}, h._callback = function (a) {
				var b = this.vars,
					c = b[a],
					d = b[a + "Params"],
					e = b[a + "Scope"] || b.callbackScope || this,
					f = d ? d.length : 0;
				switch (f) {
					case 0:
						c.call(e);
						break;
					case 1:
						c.call(e, d[0]);
						break;
					case 2:
						c.call(e, d[0], d[1]);
						break;
					default:
						c.apply(e, d)
				}
			}, h.eventCallback = function (a, b, c, d) {
				if ("on" === (a || "").substr(0, 2)) {
					var e = this.vars;
					if (1 === arguments.length) return e[a];
					null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
				}
				return this
			}, h.delay = function (a) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
			}, h.duration = function (a) {
				return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, h.totalDuration = function (a) {
				return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
			}, h.time = function (a, b) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
			}, h.totalTime = function (a, b, c) {
				if (j || i.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var d = this._totalDuration,
							e = this._timeline;
						if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
							for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Y(), this.render(a, b, !1), J.length && Y())
				}
				return this
			}, h.progress = h.totalProgress = function (a, b) {
				var c = this.duration();
				return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
			}, h.startTime = function (a) {
				return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
			}, h.endTime = function (a) {
				return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
			}, h.timeScale = function (a) {
				if (!arguments.length) return this._timeScale;
				if (a = a || m, this._timeline && this._timeline.smoothChildTiming) {
					var b = this._pauseTime,
						c = b || 0 === b ? b : this._timeline.totalTime();
					this._startTime = c - (c - this._startTime) * this._timeScale / a
				}
				return this._timeScale = a, this._uncache(!1)
			}, h.reversed = function (a) {
				return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, h.paused = function (a) {
				if (!arguments.length) return this._paused;
				var b, c, d = this._timeline;
				return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
			};
			var F = t("core.SimpleTimeline", function (a) {
				D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
				var e, f;
				if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
					for (f = a._startTime; e && e._startTime > f;) e = e._prev;
				return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
			}, h._remove = function (a, b) {
				return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, h.render = function (a, b, c) {
				var d, e = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
			}, h.rawTime = function () {
				return j || i.wake(), this._totalTime
			};
			var G = t("TweenLite", function (b, c, d) {
					if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
					this.target = b = "string" != typeof b ? b : G.selector(b) || b;
					var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
						i = this.vars.overwrite;
					if (this._overwrite = i = null == i ? U[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : U[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
						for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = Z(f, this, !1), 1 === i && this._siblings[e].length > 1 && _(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
					else this._propLookup = {}, this._siblings = Z(b, this, !1), 1 === i && this._siblings.length > 1 && _(b, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
				}, !0),
				H = function (b) {
					return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
				},
				I = function (a, b) {
					var c, d = {};
					for (c in a) T[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!Q[c] || Q[c] && Q[c]._autoCSS) || (d[c] = a[c], delete a[c]);
					a.css = d
				};
			h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.19.1", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
				i.lagSmoothing(a, b)
			}, G.selector = a.$ || a.jQuery || function (b) {
				var c = a.$ || a.jQuery;
				return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
			};
			var J = [],
				K = {},
				L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				M = function (a) {
					for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
				},
				N = function (a, b, c, d) {
					var e, f, g, h, i, j, k, l = [],
						m = 0,
						n = "",
						o = 0;
					for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
						_next: l._firstPT,
						t: l,
						p: l.length - 1,
						s: g,
						c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
						f: 0,
						m: o && 4 > o ? Math.round : 0
					}), m += k.length;
					return n += b.substr(m), n && l.push(n), l.setRatio = M, l
				},
				O = function (a, b, c, d, e, f, g, h, i) {
					"function" == typeof d && (d = d(i || 0, a));
					var j, k = typeof a[b],
						l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
						m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
						n = "string" == typeof d && "=" === d.charAt(1),
						o = {
							t: a,
							p: b,
							s: m,
							f: "function" === k,
							pg: 0,
							n: e || b,
							m: f ? "function" == typeof f ? f : Math.round : 0,
							pr: 0,
							c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
						};
					return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = N(m, n ? o.s + o.c : d, h || G.defaultStringFilter, o), o = {
						t: j,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: e || b,
						pr: 0,
						m: 0
					}) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
				},
				P = G._internals = {
					isArray: p,
					isSelector: H,
					lazyTweens: J,
					blobDif: N
				},
				Q = G._plugins = {},
				R = P.tweenLookup = {},
				S = 0,
				T = P.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1
				},
				U = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				V = D._rootFramesTimeline = new F,
				W = D._rootTimeline = new F,
				X = 30,
				Y = P.lazyRender = function () {
					var a, b = J.length;
					for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
					J.length = 0
				};
			W._startTime = i.time, V._startTime = i.frame, W._active = V._active = !0, setTimeout(Y, 1), D._updateRoot = G.render = function () {
				var a, b, c;
				if (J.length && Y(), W.render((i.time - W._startTime) * W._timeScale, !1, !1), V.render((i.frame - V._startTime) * V._timeScale, !1, !1), J.length && Y(), i.frame >= X) {
					X = i.frame + (parseInt(G.autoSleep, 10) || 120);
					for (c in R) {
						for (b = R[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
						0 === b.length && delete R[c]
					}
					if (c = W._first, (!c || c._paused) && G.autoSleep && !V._first && 1 === i._listeners.tick.length) {
						for (; c && c._paused;) c = c._next;
						c || i.sleep()
					}
				}
			}, i.addEventListener("tick", D._updateRoot);
			var Z = function (a, b, c) {
					var d, e, f = a._gsTweenID;
					if (R[f || (a._gsTweenID = f = "t" + S++)] || (R[f] = {
							target: a,
							tweens: []
						}), b && (d = R[f].tweens, d[e = d.length] = b, c))
						for (; --e > -1;) d[e] === b && d.splice(e, 1);
					return R[f].tweens
				},
				$ = function (a, b, c, d) {
					var e, f, g = a.vars.onOverwrite;
					return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
				},
				_ = function (a, b, c, d, e) {
					var f, g, h, i;
					if (1 === d || d >= 4) {
						for (i = e.length, f = 0; i > f; f++)
							if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
							else if (5 === d) break;
						return g
					}
					var j, k = b._startTime + m,
						l = [],
						n = 0,
						o = 0 === b._duration;
					for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || aa(b, 0, o), 0 === aa(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
					for (f = n; --f > -1;)
						if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
							if (2 !== d && !$(h, b)) continue;
							h._enabled(!1, !1) && (g = !0)
						} return g
				},
				aa = function (a, b, c) {
					for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
						if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
						d = d._timeline
					}
					return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
				};
			h._init = function () {
				var a, b, c, d, e, f, g = this.vars,
					h = this._overwrittenProps,
					i = this._duration,
					j = !!g.immediateRender,
					k = g.ease;
				if (g.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
					for (d in g.startAt) e[d] = g.startAt[d];
					if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = G.to(this.target, 0, e), j)
						if (this._time > 0) this._startAt = null;
						else if (0 !== i) return
				} else if (g.runBackwards && 0 !== i)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (j = !1), c = {};
						for (d in g) T[d] && "autoCSS" !== d || (c[d] = g[d]);
						if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
							if (0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					} if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
				else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
				if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
					for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
				this._onUpdate = g.onUpdate, this._initted = !0
			}, h._initProps = function (b, c, d, e, f) {
				var g, h, i, j, k, l;
				if (null == b) return !1;
				K[b._gsTweenID] && Y(), this.vars.css || b.style && b !== a && b.nodeType && Q.css && this.vars.autoCSS !== !1 && I(this.vars, b);
				for (g in this.vars)
					if (l = this.vars[g], T[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
					else if (Q[g] && (j = new Q[g])._onInitTween(b, this.vars[g], this, f)) {
					for (this._firstPT = k = {
							_next: this._firstPT,
							t: j,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: g,
							pg: 1,
							pr: j._priority,
							m: 0
						}, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
					(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
				} else c[g] = O.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
				return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && _(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
			}, h.render = function (a, b, c) {
				var d, e, f, g, h = this._time,
					i = this._duration,
					j = this._rawPrevTime;
				if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
				else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), this._initted || (c = !0);
				else if (this._totalTime = this._time = a, this._easeType) {
					var k = a / i,
						l = this._easeType,
						n = this._easePower;
					(1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
				} else this.ratio = this._ease.getRatio(a / i);
				if (this._time !== h || c) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
						this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
					this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
				}
			}, h._kill = function (a, b, c) {
				if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
				var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
				if ((p(b) || H(b)) && "number" != typeof b[0])
					for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
				else {
					if (this._targets) {
						for (d = this._targets.length; --d > -1;)
							if (b === this._targets[d]) {
								h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
								break
							}
					} else {
						if (b !== this.target) return !1;
						h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
					}
					if (h) {
						if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
							for (f in j) h[f] && (l || (l = []), l.push(f));
							if ((l || !a) && !$(this, c, b, l)) return !1
						}
						for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return i
			}, h.invalidate = function () {
				return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
			}, h._enabled = function (a, b) {
				if (j || i.wake(), a && this._gc) {
					var c, d = this._targets;
					if (d)
						for (c = d.length; --c > -1;) this._siblings[c] = Z(d[c], this, !0);
					else this._siblings = Z(this.target, this, !0)
				}
				return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
			}, G.to = function (a, b, c) {
				return new G(a, b, c)
			}, G.from = function (a, b, c) {
				return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
			}, G.fromTo = function (a, b, c, d) {
				return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
			}, G.delayedCall = function (a, b, c, d, e) {
				return new G(b, 0, {
					delay: a,
					onComplete: b,
					onCompleteParams: c,
					callbackScope: d,
					onReverseComplete: b,
					onReverseCompleteParams: c,
					immediateRender: !1,
					lazy: !1,
					useFrames: e,
					overwrite: 0
				})
			}, G.set = function (a, b) {
				return new G(a, 0, b)
			}, G.getTweensOf = function (a, b) {
				if (null == a) return [];
				a = "string" != typeof a ? a : G.selector(a) || a;
				var c, d, e, f;
				if ((p(a) || H(a)) && "number" != typeof a[0]) {
					for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
					for (c = d.length; --c > -1;)
						for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
				} else
					for (d = Z(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
				return d
			}, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
				"object" == typeof b && (c = b, b = !1);
				for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
			};
			var ba = t("plugins.TweenPlugin", function (a, b) {
				this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ba.prototype
			}, !0);
			if (h = ba.prototype, ba.version = "1.19.0", ba.API = 2, h._firstPT = null, h._addTween = O, h.setRatio = M, h._kill = function (a) {
					var b, c = this._overwriteProps,
						d = this._firstPT;
					if (null != a[this._propName]) this._overwriteProps = [];
					else
						for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
					for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
					return !1
				}, h._mod = h._roundProps = function (a) {
					for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
				}, G._onPluginEvent = function (a, b) {
					var c, d, e, f, g, h = b._firstPT;
					if ("_onInitAllProps" === a) {
						for (; h;) {
							for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
							(h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
						}
						h = b._firstPT = e
					}
					for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
					return c
				}, ba.activate = function (a) {
					for (var b = a.length; --b > -1;) a[b].API === ba.API && (Q[(new a[b])._propName] = a[b]);
					return !0
				}, s.plugin = function (a) {
					if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
					var b, c = a.propName,
						d = a.priority || 0,
						e = a.overwriteProps,
						f = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
							ba.call(this, c, d), this._overwriteProps = e || []
						}, a.global === !0),
						h = g.prototype = new ba(c);
					h.constructor = g, g.API = a.API;
					for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
					return g.version = a.version, ba.activate([g]), g
				}, f = a._gsQueue) {
				for (g = 0; g < f.length; g++) f[g]();
				for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
			}
			j = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
			var s = function (t) {
					e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
					var i, s, r = this.vars;
					for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
					h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
				},
				r = 1e-10,
				n = i._internals,
				a = s._internals = {},
				o = n.isSelector,
				h = n.isArray,
				l = n.lazyTweens,
				_ = n.lazyRender,
				u = [],
				f = _gsScope._gsDefine.globals,
				c = function (t) {
					var e, i = {};
					for (e in t) i[e] = t[e];
					return i
				},
				p = a.pauseCallback = function (t, e, i, s) {
					var n, a = t._timeline,
						o = a._totalTime,
						h = t._startTime,
						l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
						_ = l ? 0 : r,
						f = l ? r : 0;
					if (e || !this._forcingPlayhead) {
						for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev;
						for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
						e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
					}
				},
				m = function (t) {
					var e, i = [],
						s = t.length;
					for (e = 0; e !== s; i.push(t[e++]));
					return i
				},
				d = s.prototype = new e;
			return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
				var n = s.repeat && f.TweenMax || i;
				return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
			}, d.from = function (t, e, s, r) {
				return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
			}, d.fromTo = function (t, e, s, r, n) {
				var a = r.repeat && f.TweenMax || i;
				return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
			}, d.staggerTo = function (t, e, r, n, a, h, l, _) {
				var u, f = new s({
					onComplete: h,
					onCompleteParams: l,
					callbackScope: _,
					smoothChildTiming: this.smoothChildTiming
				});
				for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n);
				return this.add(f, a)
			}, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
				return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
			}, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
				return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
			}, d.call = function (t, e, s, r) {
				return this.add(i.delayedCall(0, t, e, s), r)
			}, d.set = function (t, e, s) {
				return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
			}, s.exportRoot = function (t, e) {
				t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
				var r, n, a = new s(t),
					o = a._timeline;
				for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
				return o.add(a, 0), a
			}, d.add = function (r, n, a, o) {
				var l, _, u, f, c, p;
				if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
					if (r instanceof Array || r && r.push && h(r)) {
						for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({
							tweens: f
						})), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
						return this._uncache(!0)
					}
					if ("string" == typeof r) return this.addLabel(r, n);
					if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
					r = i.delayedCall(0, r)
				}
				if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
					for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
				return this
			}, d.remove = function (e) {
				if (e instanceof t) return this._remove(e, !1);
				if (e instanceof Array || e && e.push && h(e)) {
					for (var i = e.length; --i > -1;) this.remove(e[i]);
					return this
				}
				return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
			}, d._remove = function (t, i) {
				e.prototype._remove.call(this, t, i);
				var s = this._last;
				return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
			}, d.append = function (t, e) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
			}, d.insert = d.insertMultiple = function (t, e, i, s) {
				return this.add(t, e || 0, i, s)
			}, d.appendMultiple = function (t, e, i, s) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
			}, d.addLabel = function (t, e) {
				return this._labels[t] = this._parseTimeOrLabel(e), this
			}, d.addPause = function (t, e, s, r) {
				var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
				return n.data = "isPause", this.add(n, t)
			}, d.removeLabel = function (t) {
				return delete this._labels[t], this
			}, d.getLabelTime = function (t) {
				return null != this._labels[t] ? this._labels[t] : -1
			}, d._parseTimeOrLabel = function (e, i, s, r) {
				var n;
				if (r instanceof t && r.timeline === this) this.remove(r);
				else if (r && (r instanceof Array || r.push && h(r)))
					for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
				if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
				if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
				else {
					if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
					i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
				}
				return Number(e) + i
			}, d.seek = function (t, e) {
				return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
			}, d.stop = function () {
				return this.paused(!0)
			}, d.gotoAndPlay = function (t, e) {
				return this.play(t, e)
			}, d.gotoAndStop = function (t, e) {
				return this.pause(t, e)
			}, d.render = function (t, e, i) {
				this._gc && this._enabled(!0, !1);
				var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
					f = this._time,
					c = this._startTime,
					p = this._timeScale,
					m = this._paused;
				if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
				else if (1e-7 > t)
					if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
					else {
						if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
							for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
						t = 0, this._initted || (h = !0)
					}
				else this._totalTime = this._time = this._rawPrevTime = t;
				if (this._time !== f && this._first || i || h) {
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
						for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
					else
						for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
					this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
				}
			}, d._hasPausedChild = function () {
				for (var t = this._first; t;) {
					if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
					t = t._next
				}
				return !1
			}, d.getChildren = function (t, e, s, r) {
				r = r || -9999999999;
				for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
				return n
			}, d.getTweensOf = function (t, e) {
				var s, r, n = this._gc,
					a = [],
					o = 0;
				for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
				return n && this._enabled(!1, !0), a
			}, d.recent = function () {
				return this._recent
			}, d._contains = function (t) {
				for (var e = t.timeline; e;) {
					if (e === this) return !0;
					e = e.timeline
				}
				return !1
			}, d.shiftChildren = function (t, e, i) {
				i = i || 0;
				for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
				if (e)
					for (s in n) n[s] >= i && (n[s] += t);
				return this._uncache(!0)
			}, d._kill = function (t, e) {
				if (!t && !e) return this._enabled(!1, !1);
				for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
				return r
			}, d.clear = function (t) {
				var e = this.getChildren(!1, !0, !0),
					i = e.length;
				for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
				return t !== !1 && (this._labels = {}), this._uncache(!0)
			}, d.invalidate = function () {
				for (var e = this._first; e;) e.invalidate(), e = e._next;
				return t.prototype.invalidate.call(this)
			}, d._enabled = function (t, i) {
				if (t === this._gc)
					for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
				return e.prototype._enabled.call(this, t, i)
			}, d.totalTime = function () {
				this._forcingPlayhead = !0;
				var e = t.prototype.totalTime.apply(this, arguments);
				return this._forcingPlayhead = !1, e
			}, d.duration = function (t) {
				return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
			}, d.totalDuration = function (t) {
				if (!arguments.length) {
					if (this._dirty) {
						for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
						this._duration = this._totalDuration = s, this._dirty = !1
					}
					return this._totalDuration
				}
				return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
			}, d.paused = function (e) {
				if (!e)
					for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
				return t.prototype.paused.apply(this, arguments)
			}, d.usesFrames = function () {
				for (var e = this._timeline; e._timeline;) e = e._timeline;
				return e === t._rootFramesTimeline
			}, d.rawTime = function () {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
			}, s
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t) {
		"use strict";
		var e = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[t]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
	}("TimelineLite");


/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
			var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
				f = e.com.greensock,
				g = 2 * Math.PI,
				h = Math.PI / 2,
				i = f._class,
				j = function (b, c) {
					var d = i("easing." + b, function () {}, !0),
						e = d.prototype = new a;
					return e.constructor = d, e.getRatio = c, d
				},
				k = a.register || function () {},
				l = function (a, b, c, d, e) {
					var f = i("easing." + a, {
						easeOut: new b,
						easeIn: new c,
						easeInOut: new d
					}, !0);
					return k(f, a), f
				},
				m = function (a, b, c) {
					this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
				},
				n = function (b, c) {
					var d = i("easing." + b, function (a) {
							this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
						}, !0),
						e = d.prototype = new a;
					return e.constructor = d, e.getRatio = c, e.config = function (a) {
						return new d(a)
					}, d
				},
				o = l("Back", n("BackOut", function (a) {
					return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
				}), n("BackIn", function (a) {
					return a * a * ((this._p1 + 1) * a - this._p1)
				}), n("BackInOut", function (a) {
					return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
				})),
				p = i("easing.SlowMo", function (a, b, c) {
					b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
				}, !0),
				q = p.prototype = new a;
			return q.constructor = p, q.getRatio = function (a) {
				var b = a + (.5 - a) * this._p;
				return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
			}, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
				return new p(a, b, c)
			}, b = i("easing.SteppedEase", function (a) {
				a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
			}, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
				return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
			}, q.config = b.config = function (a) {
				return new b(a)
			}, c = i("easing.RoughEase", function (b) {
				b = b || {};
				for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
					x: c,
					y: d
				};
				for (j.sort(function (a, b) {
						return a.x - b.x
					}), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
				this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
			}, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
				var b = this._prev;
				if (a > b.t) {
					for (; b.next && a >= b.t;) b = b.next;
					b = b.prev
				} else
					for (; b.prev && a <= b.t;) b = b.prev;
				return this._prev = b, b.v + (a - b.t) / b.gap * b.c
			}, q.config = function (a) {
				return new c(a)
			}, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
				return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
			}), j("BounceIn", function (a) {
				return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
			}), j("BounceInOut", function (a) {
				var b = .5 > a;
				return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
			})), l("Circ", j("CircOut", function (a) {
				return Math.sqrt(1 - (a -= 1) * a)
			}), j("CircIn", function (a) {
				return -(Math.sqrt(1 - a * a) - 1)
			}), j("CircInOut", function (a) {
				return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
			})), d = function (b, c, d) {
				var e = i("easing." + b, function (a, b) {
						this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
					}, !0),
					f = e.prototype = new a;
				return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
					return new e(a, b)
				}, e
			}, l("Elastic", d("ElasticOut", function (a) {
				return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
			}, .3), d("ElasticIn", function (a) {
				return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
			}, .3), d("ElasticInOut", function (a) {
				return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
			}, .45)), l("Expo", j("ExpoOut", function (a) {
				return 1 - Math.pow(2, -10 * a)
			}), j("ExpoIn", function (a) {
				return Math.pow(2, 10 * (a - 1)) - .001
			}), j("ExpoInOut", function (a) {
				return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
			})), l("Sine", j("SineOut", function (a) {
				return Math.sin(a * h)
			}), j("SineIn", function (a) {
				return -Math.cos(a * h) + 1
			}), j("SineInOut", function (a) {
				return -.5 * (Math.cos(Math.PI * a) - 1)
			})), i("easing.EaseLookup", {
				find: function (b) {
					return a.map[b]
				}
			}, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function () {
		"use strict";
		var a = function () {
			return _gsScope.GreenSockGlobals || _gsScope
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = a())
	}();
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
			var c, d, e, f, g = function () {
					a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
				},
				h = _gsScope._gsDefine.globals,
				i = {},
				j = g.prototype = new a("css");
			j.constructor = g, g.version = "1.19.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
				top: j,
				right: j,
				bottom: j,
				left: j,
				width: j,
				height: j,
				fontSize: j,
				padding: j,
				margin: j,
				perspective: j,
				lineHeight: ""
			};
			var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
				t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
				v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
				w = /(?:\d|\-|\+|=|#|\.)*/g,
				x = /opacity *= *([^)]*)/i,
				y = /opacity:([^;]*)/i,
				z = /alpha\(opacity *=.+?\)/i,
				A = /^(rgb|hsl)/,
				B = /([A-Z])/g,
				C = /-([a-z])/gi,
				D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
				E = function (a, b) {
					return b.toUpperCase()
				},
				F = /(?:Left|Right|Width)/i,
				G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				I = /,(?=[^\)]*(?:\(|$))/gi,
				J = /[\s,\(]/i,
				K = Math.PI / 180,
				L = 180 / Math.PI,
				M = {},
				N = {
					style: {}
				},
				O = _gsScope.document || {
					createElement: function () {
						return N
					}
				},
				P = function (a, b) {
					return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
				},
				Q = P("div"),
				R = P("img"),
				S = g._internals = {
					_specialProps: i
				},
				T = (_gsScope.navigator || {}).userAgent || "",
				U = function () {
					var a = T.indexOf("Android"),
						b = P("a");
					return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
				}(),
				V = function (a) {
					return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
				},
				W = function (a) {
					_gsScope.console && console.log(a)
				},
				X = "",
				Y = "",
				Z = function (a, b) {
					b = b || Q;
					var c, d, e = b.style;
					if (void 0 !== e[a]) return a;
					for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
					return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
				},
				$ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
				_ = g.getStyle = function (a, b, c, d, e) {
					var f;
					return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
				},
				aa = S.convertToPixels = function (a, c, d, e, f) {
					if ("px" === e || !e) return d;
					if ("auto" === e || !d) return 0;
					var h, i, j, k = F.test(c),
						l = a,
						m = Q.style,
						n = 0 > d,
						o = 1 === d;
					if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
					else {
						if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
						else {
							if (l = a.parentNode || O.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
							m[k ? "width" : "height"] = d + e
						}
						l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
					}
					return o && (h /= 100), n ? -h : h
				},
				ba = S.calculateOffset = function (a, b, c) {
					if ("absolute" !== _(a, "position", c)) return 0;
					var d = "left" === b ? "Left" : "Top",
						e = _(a, "margin" + d, c);
					return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
				},
				ca = function (a, b) {
					var c, d, e, f = {};
					if (b = b || $(a, null))
						if (c = b.length)
							for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
						else
							for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
					else if (b = a.currentStyle || a.style)
						for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
					return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
				},
				da = function (a, b, c, d, e) {
					var f, g, h, i = {},
						j = a.style;
					for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
					if (d)
						for (g in d) "className" !== g && (i[g] = d[g]);
					return {
						difs: i,
						firstMPT: h
					}
				},
				ea = {
					width: ["Left", "Right"],
					height: ["Top", "Bottom"]
				},
				fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
				ga = function (a, b, c) {
					if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
					if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
					var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
						e = ea[b],
						f = e.length;
					for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
					return d
				},
				ha = function (a, b) {
					if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
					(null == a || "" === a) && (a = "0 0");
					var c, d = a.split(" "),
						e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
						f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
					if (d.length > 3 && !b) {
						for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
						return a.join(",")
					}
					return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
				},
				ia = function (a, b) {
					return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
				},
				ja = function (a, b) {
					return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
				},
				ka = function (a, b, c, d) {
					var e, f, g, h, i, j = 1e-6;
					return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
				},
				la = {
					aqua: [0, 255, 255],
					lime: [0, 255, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, 255],
					navy: [0, 0, 128],
					white: [255, 255, 255],
					fuchsia: [255, 0, 255],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					orange: [255, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [255, 0, 0],
					pink: [255, 192, 203],
					cyan: [0, 255, 255],
					transparent: [255, 255, 255, 0]
				},
				ma = function (a, b, c) {
					return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
				},
				na = g.parseColor = function (a, b) {
					var c, d, e, f, g, h, i, j, k, l, m;
					if (a)
						if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
						else {
							if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
							else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
							else if ("hsl" === a.substr(0, 3))
								if (c = m = a.match(s), b) {
									if (-1 !== a.indexOf("=")) return a.match(t)
								} else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
							else c = a.match(s) || la.transparent;
							c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
						}
					else c = la.black;
					return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
				},
				oa = function (a, b) {
					var c, d, e, f = a.match(pa) || [],
						g = 0,
						h = f.length ? "" : a;
					for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
					return h + a.substr(g)
				},
				pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
			for (j in la) pa += "|" + j + "\\b";
			pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
				var b, c = a[0] + a[1];
				pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
			}, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
			var qa = function (a, b, c, d) {
					if (null == a) return function (a) {
						return a
					};
					var e, f = b ? (a.match(pa) || [""])[0] : "",
						g = a.split(f).join("").match(u) || [],
						h = a.substr(0, a.indexOf(g[0])),
						i = ")" === a.charAt(a.length - 1) ? ")" : "",
						j = -1 !== a.indexOf(" ") ? " " : ",",
						k = g.length,
						l = k > 0 ? g[0].replace(s, "") : "";
					return k ? e = b ? function (a) {
						var b, m, n, o;
						if ("number" == typeof a) a += l;
						else if (d && I.test(a)) {
							for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
							return o.join(",")
						}
						if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
							for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
						return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
					} : function (a) {
						var b, f, m;
						if ("number" == typeof a) a += l;
						else if (d && I.test(a)) {
							for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
							return f.join(",")
						}
						if (b = a.match(u) || [], m = b.length, k > m--)
							for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
						return h + b.join(j) + i
					} : function (a) {
						return a
					}
				},
				ra = function (a) {
					return a = a.split(","),
						function (b, c, d, e, f, g, h) {
							var i, j = (c + "").split(" ");
							for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
							return e.parse(b, h, f, g)
						}
				},
				sa = (S._setPluginRatio = function (a) {
					this.plugin.setRatio(a);
					for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
					if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
						for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
							if (c = i.t, c.type) {
								if (1 === c.type) {
									for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
									c[f] = e
								}
							} else c[f] = c.s + c.xs0;
							i = i._next
						}
				}, function (a, b, c, d, e) {
					this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
				}),
				ta = (S._parseToProxy = function (a, b, c, d, e, f) {
					var g, h, i, j, k, l = d,
						m = {},
						n = {},
						o = c._transform,
						p = M;
					for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
						if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
							for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
						d = d._next
					}
					return {
						proxy: m,
						end: n,
						firstMPT: j,
						pt: k
					}
				}, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
					this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
				}),
				ua = function (a, b, c, d, e, f) {
					var g = new ta(a, b, c, d - c, e, -1, f);
					return g.b = c, g.e = g.xs0 = d, g
				},
				va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
					c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
					var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
						E = d.split(", ").join(",").split(" "),
						F = D.length,
						G = k !== !1;
					for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
						if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
						else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(y ? "hsla(" : "hsl(", p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(y ? "rgba(" : "rgb(", p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
					else if (v = p.match(s)) {
						if (w = u.match(t), !w || w.length !== v.length) return h;
						for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
						h["xs" + h.l] += p.substr(o)
					} else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
					if (-1 !== d.indexOf("=") && h.data) {
						for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
						h.e = B + h["xs" + m]
					}
					return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
				},
				wa = 9;
			for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
			j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
				var g = this,
					h = g.l;
				return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
					s: b + c
				}, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
			};
			var xa = function (a, b) {
					b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
				},
				ya = S._registerComplexSpecialProp = function (a, b, c) {
					"object" != typeof b && (b = {
						parser: c
					});
					var d, e, f = a.split(","),
						g = b.defaultValue;
					for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
				},
				za = S._registerPluginProp = function (a) {
					if (!i[a]) {
						var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
						ya(a, {
							parser: function (a, c, d, e, f, g, j) {
								var k = h.com.greensock.plugins[b];
								return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
							}
						})
					}
				};
			j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
				var g, h, i, j, k, l, m = this.keyword;
				if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
					for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
					b = h.join(", "), c = i.join(", ")
				}
				return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
			}, j.parse = function (a, b, c, d, f, g, h) {
				return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
			}, g.registerSpecialProp = function (a, b, c) {
				ya(a, {
					parser: function (a, d, e, f, g, h, i) {
						var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
						return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
					},
					priority: c
				})
			}, g.useSVGTransformAttr = !0;
			var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
				Ca = Z("transform"),
				Da = X + "transform",
				Ea = Z("transformOrigin"),
				Fa = null !== Z("perspective"),
				Ga = S.Transform = function () {
					this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
				},
				Ha = _gsScope.SVGElement,
				Ia = function (a, b, c) {
					var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
						f = /([a-z])([A-Z])/g;
					for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
					return b.appendChild(e), e
				},
				Ja = O.documentElement || {},
				Ka = function () {
					var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
					return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
						width: 100,
						height: 50,
						x: 100
					}), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
				}(),
				La = function (a, b, c, d, e, f) {
					var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
						w = Qa(a, !0);
					v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
						x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
						y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
						width: 0,
						height: 0
					}), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
				},
				Ma = function (a) {
					var b, c = P("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
						d = this.parentNode,
						e = this.nextSibling,
						f = this.style.cssText;
					if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
						b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
					} catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
					return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
				},
				Na = function (a) {
					try {
						return a.getBBox()
					} catch (b) {
						return Ma.call(a, !0)
					}
				},
				Oa = function (a) {
					return !(!(Ha && a.getCTM && Na(a)) || a.parentNode && !a.ownerSVGElement)
				},
				Pa = [1, 0, 0, 1, 0, 0],
				Qa = function (a, b) {
					var c, d, e, f, g, h, i = a._gsTransform || new Ga,
						j = 1e5,
						k = a.style;
					if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && Ca && ((h = "none" === $(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa;
					for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
					return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
				},
				Ra = S.getTransform = function (a, c, d, e) {
					if (a._gsTransform && d && !e) return a._gsTransform;
					var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
						n = m.scaleX < 0,
						o = 2e-5,
						p = 1e5,
						q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
						r = parseFloat(g.defaultTransformPerspective) || 0;
					if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
						if (16 === f.length) {
							var s, t, u, v, w, x = f[0],
								y = f[1],
								z = f[2],
								A = f[3],
								B = f[4],
								C = f[5],
								D = f[6],
								E = f[7],
								F = f[8],
								G = f[9],
								H = f[10],
								I = f[12],
								J = f[13],
								K = f[14],
								M = f[11],
								N = Math.atan2(D, H);
							m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * L + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
						} else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
							var O = f.length >= 6,
								P = O ? f[0] : 1,
								Q = f[1] || 0,
								R = f[2] || 0,
								S = O ? f[3] : 1;
							m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
						}
						m.zOrigin = q;
						for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
					}
					return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
						Va(a.style, Ca)
					}) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
						a.removeAttribute("transform")
					}))), m
				},
				Sa = function (a) {
					var b, c, d = this.data,
						e = -d.rotation * K,
						f = e + d.skewX * K,
						g = 1e5,
						h = (Math.cos(e) * d.scaleX * g | 0) / g,
						i = (Math.sin(e) * d.scaleX * g | 0) / g,
						j = (Math.sin(f) * -d.scaleY * g | 0) / g,
						k = (Math.cos(f) * d.scaleY * g | 0) / g,
						l = this.t.style,
						m = this.t.currentStyle;
					if (m) {
						c = i, i = -j, j = -c, b = m.filter, l.filter = "";
						var n, o, q = this.t.offsetWidth,
							r = this.t.offsetHeight,
							s = "absolute" !== m.position,
							t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
							u = d.x + q * d.xPercent / 100,
							v = d.y + r * d.yPercent / 100;
						if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
							var y, z, A, B = 8 > p ? 1 : -1;
							for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
						}
					}
				},
				Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
					var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
						A = this.t.style,
						B = z.rotation,
						C = z.rotationX,
						D = z.rotationY,
						E = z.scaleX,
						F = z.scaleY,
						G = z.scaleZ,
						H = z.x,
						I = z.y,
						J = z.z,
						L = z.svg,
						M = z.perspective,
						N = z.force3D,
						O = z.skewY,
						P = z.skewX;
					if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
					if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
					else {
						if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
						c = g = 1, d = f = 0
					}
					k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
				};
			j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
				parser: function (a, b, c, d, f, h, i) {
					if (d._lastParsedTransform === i) return f;
					d._lastParsedTransform = i;
					var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
					"function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
					var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
						x = a.style,
						y = 1e-6,
						z = Ba.length,
						A = i,
						B = {},
						C = "transformOrigin",
						D = Ra(a, e, !0, A.parseTransform),
						E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
					if (d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
					else if ("object" == typeof A) {
						if (l = {
								scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
								scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
								scaleZ: ja(A.scaleZ, D.scaleZ),
								x: ja(A.x, D.x),
								y: ja(A.y, D.y),
								z: ja(A.z, D.z),
								xPercent: ja(A.xPercent, D.xPercent),
								yPercent: ja(A.yPercent, D.yPercent),
								perspective: ja(A.transformPerspective, D.perspective)
							}, p = A.directionalRotation, null != p)
							if ("object" == typeof p)
								for (m in p) A[m] = p[m];
							else A.rotation = p;
						"string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
					}
					for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), D.skewType = A.skewType || D.skewType || g.defaultSkewType, n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
					return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
				},
				prefix: !0
			}), ya("boxShadow", {
				defaultValue: "0px 0px 0px 0px #999",
				prefix: !0,
				color: !0,
				multi: !0,
				keyword: "inset"
			}), ya("borderRadius", {
				defaultValue: "0px",
				parser: function (a, b, c, f, g, h) {
					b = this.format(b);
					var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
						z = a.style;
					for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
					return g
				},
				prefix: !0,
				formatter: qa("0px 0px 0px 0px", !1, !0)
			}), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
				defaultValue: "0px",
				parser: function (a, b, c, d, f, g) {
					return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
				},
				prefix: !0,
				formatter: qa("0px 0px", !1, !0)
			}), ya("backgroundPosition", {
				defaultValue: "0 0",
				parser: function (a, b, c, d, f, g) {
					var h, i, j, k, l, m, n = "background-position",
						o = e || $(a, null),
						q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
						r = this.format(b);
					if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
						for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
						q = h.join(" ")
					}
					return this.parseComplex(a.style, q, r, f, g)
				},
				formatter: ha
			}), ya("backgroundSize", {
				defaultValue: "0 0",
				formatter: function (a) {
					return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
				}
			}), ya("perspective", {
				defaultValue: "0px",
				prefix: !0
			}), ya("perspectiveOrigin", {
				defaultValue: "50% 50%",
				prefix: !0
			}), ya("transformStyle", {
				prefix: !0
			}), ya("backfaceVisibility", {
				prefix: !0
			}), ya("userSelect", {
				prefix: !0
			}), ya("margin", {
				parser: ra("marginTop,marginRight,marginBottom,marginLeft")
			}), ya("padding", {
				parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
			}), ya("clip", {
				defaultValue: "rect(0px,0px,0px,0px)",
				parser: function (a, b, c, d, f, g) {
					var h, i, j;
					return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
						b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
				}
			}), ya("textShadow", {
				defaultValue: "0px 0px 0px #999",
				color: !0,
				multi: !0
			}), ya("autoRound,strictUnits", {
				parser: function (a, b, c, d, e) {
					return e
				}
			}), ya("border", {
				defaultValue: "0px solid #000",
				parser: function (a, b, c, d, f, g) {
					var h = _(a, "borderTopWidth", e, !1, "0px"),
						i = this.format(b).split(" "),
						j = i[0].replace(w, "");
					return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
				},
				color: !0,
				formatter: function (a) {
					var b = a.split(" ");
					return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
				}
			}), ya("borderWidth", {
				parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
			}), ya("float,cssFloat,styleFloat", {
				parser: function (a, b, c, d, e, f) {
					var g = a.style,
						h = "cssFloat" in g ? "cssFloat" : "styleFloat";
					return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
				}
			});
			var Ua = function (a) {
				var b, c = this.t,
					d = c.filter || _(this.data, "filter") || "",
					e = this.s + this.c * a | 0;
				100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
			};
			ya("opacity,alpha,autoAlpha", {
				defaultValue: "1",
				parser: function (a, b, c, d, f, g) {
					var h = parseFloat(_(a, "opacity", e, !1, "1")),
						i = a.style,
						j = "autoAlpha" === c;
					return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
				}
			});
			var Va = function (a, b) {
					b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
				},
				Wa = function (a) {
					if (this.t._gsClassPT = this, 1 === a || 0 === a) {
						this.t.setAttribute("class", 0 === a ? this.b : this.e);
						for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
						1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
					} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
				};
			ya("className", {
				parser: function (a, b, d, f, g, h, i) {
					var j, k, l, m, n, o = a.getAttribute("class") || "",
						p = a.style.cssText;
					if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
						for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
						l.setRatio(1)
					}
					return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
				}
			});
			var Xa = function (a) {
				if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
					var b, c, d, e, f, g = this.t.style,
						h = i.transform.parse;
					if ("all" === this.e) g.cssText = "", e = !0;
					else
						for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
					e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
				}
			};
			for (ya("clearProps", {
					parser: function (a, b, d, e, f) {
						return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
					}
				}), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
			j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
				if (!a.nodeType) return !1;
				this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
				var n, p, s, t, u, v, w, x, z, A = a.style;
				if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
					for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
					x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
				}
				if (c) {
					for (; p;) {
						for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
						(p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
					}
					this._firstPT = t
				}
				return !0
			}, j.parse = function (a, b, c, f) {
				var g, h, j, l, m, n, o, p, s, t, u = a.style;
				for (g in b) n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
				return c
			}, j.setRatio = function (a) {
				var b, c, d, e = this._firstPT,
					f = 1e-6;
				if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
					if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
						for (; e;) {
							if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
								if (1 === e.type)
									if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
									else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
							else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
							else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
							else {
								for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
								e.t[e.p] = c
							} else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
							else e.t[e.p] = b + e.xs0;
							e = e._next
						} else
							for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
					else
						for (; e;) {
							if (2 !== e.type)
								if (e.r && -1 !== e.type)
									if (b = Math.round(e.s + e.c), e.type) {
										if (1 === e.type) {
											for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
											e.t[e.p] = c
										}
									} else e.t[e.p] = b + e.xs0;
							else e.t[e.p] = e.e;
							else e.setRatio(a);
							e = e._next
						}
			}, j._enableTransforms = function (a) {
				this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
			};
			var Ya = function (a) {
				this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
			};
			j._addLazySet = function (a, b, c) {
				var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
				d.e = c, d.setRatio = Ya, d.data = this
			}, j._linkCSSP = function (a, b, c, d) {
				return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
			}, j._mod = function (a) {
				for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
			}, j._kill = function (b) {
				var c, d, e, f = b;
				if (b.autoAlpha || b.alpha) {
					f = {};
					for (d in b) f[d] = b[d];
					f.opacity = 1, f.autoAlpha && (f.visibility = 1)
				}
				for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
				return a.prototype._kill.call(this, f)
			};
			var Za = function (a, b, c) {
				var d, e, f, g;
				if (a.slice)
					for (e = a.length; --e > -1;) Za(a[e], b, c);
				else
					for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
			};
			return g.cascadeTo = function (a, c, d) {
				var e, f, g, h, i = b.to(a, c, d),
					j = [i],
					k = [],
					l = [],
					m = [],
					n = b._internals.reservedProps;
				for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
					if (f = da(m[e], k[e], l[e]), f.firstMPT) {
						f = f.difs;
						for (g in d) n[g] && (f[g] = d[g]);
						h = {};
						for (g in f) h[g] = k[e][g];
						j.push(b.fromTo(m[e], c, h, f))
					} return j
			}, a.activate([g]), g
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (a) {
		"use strict";
		var b = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[a]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
	}("CSSPlugin");
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (a) {
	"use strict";
	var b = a.GreenSockGlobals || a,
		c = function (a) {
			var c, d = a.split("."),
				e = b;
			for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {};
			return e
		},
		d = c("com.greensock.utils"),
		e = function (a) {
			var b = a.nodeType,
				c = "";
			if (1 === b || 9 === b || 11 === b) {
				if ("string" == typeof a.textContent) return a.textContent;
				for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
			} else if (3 === b || 4 === b) return a.nodeValue;
			return c
		},
		f = document,
		g = f.defaultView ? f.defaultView.getComputedStyle : function () {},
		h = /([A-Z])/g,
		i = function (a, b, c, d) {
			var e;
			return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
		},
		j = function (a) {
			return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
		},
		k = function (a) {
			var b, c, d, e = [],
				f = a.length;
			for (b = 0; f > b; b++)
				if (c = a[b], j(c))
					for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
				else e.push(c);
			return e
		},
		l = /(?:\r|\n|\t\t)/g,
		m = /(?:\s\s+)/g,
		n = 55296,
		o = 56319,
		p = 56320,
		q = 127462,
		r = 127487,
		s = 127995,
		t = 127999,
		u = function (a) {
			return (a.charCodeAt(0) - n << 10) + (a.charCodeAt(1) - p) + 65536
		},
		v = f.all && !f.addEventListener,
		w = " style='position:relative;display:inline-block;" + (v ? "*display:inline;*zoom:1;'" : "'"),
		x = function (a, b) {
			a = a || "";
			var c = -1 !== a.indexOf("++"),
				d = 1;
			return c && (a = a.split("++").join("")),
				function () {
					return "<" + b + w + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">")
				}
		},
		y = d.SplitText = b.SplitText = function (a, b) {
			if ("string" == typeof a && (a = y.selector(a)), !a) throw "cannot split a null element.";
			this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
		},
		z = function (a, b, c) {
			var d = a.nodeType;
			if (1 === d || 9 === d || 11 === d)
				for (a = a.firstChild; a; a = a.nextSibling) z(a, b, c);
			else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
		},
		A = function (a, b) {
			for (var c = b.length; --c > -1;) a.push(b[c])
		},
		B = function (a) {
			var b, c = [],
				d = a.length;
			for (b = 0; b !== d; c.push(a[b++]));
			return c
		},
		C = function (a, b, c) {
			for (var d; a && a !== b;) {
				if (d = a._next || a.nextSibling) return d.textContent.charAt(0) === c;
				a = a.parentNode || a._parent
			}
			return !1
		},
		D = function (a) {
			var b, c, d = B(a.childNodes),
				e = d.length;
			for (b = 0; e > b; b++) c = d[b], c._isSplit ? D(c) : (b && 3 === c.previousSibling.nodeType ? c.previousSibling.nodeValue += 3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue : 3 !== c.nodeType && a.insertBefore(c.firstChild, c), a.removeChild(c))
		},
		E = function (a, b, c, d, e, h, j) {
			var k, l, m, n, o, p, q, r, s, t, u, v, w = g(a),
				x = i(a, "paddingLeft", w),
				y = -999,
				B = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w),
				E = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w),
				F = i(a, "paddingTop", w) + i(a, "paddingBottom", w),
				G = i(a, "paddingLeft", w) + i(a, "paddingRight", w),
				H = .2 * i(a, "fontSize"),
				I = i(a, "textAlign", w, !0),
				J = [],
				K = [],
				L = [],
				M = b.wordDelimiter || " ",
				N = b.span ? "span" : "div",
				O = b.type || b.split || "chars,words,lines",
				P = e && -1 !== O.indexOf("lines") ? [] : null,
				Q = -1 !== O.indexOf("words"),
				R = -1 !== O.indexOf("chars"),
				S = "absolute" === b.position || b.absolute === !0,
				T = b.linesClass,
				U = -1 !== (T || "").indexOf("++"),
				V = [];
			for (P && 1 === a.children.length && a.children[0]._isSplit && (a = a.children[0]), U && (T = T.split("++").join("")), l = a.getElementsByTagName("*"), m = l.length, o = [], k = 0; m > k; k++) o[k] = l[k];
			if (P || S)
				for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, (p || S || R && !Q) && (v = n.offsetTop, P && p && Math.abs(v - y) > H && "BR" !== n.nodeName && (q = [], P.push(q), y = v), S && (n._x = n.offsetLeft, n._y = v, n._w = n.offsetWidth, n._h = n.offsetHeight), P && ((n._isSplit && p || !R && p || Q && p || !Q && n.parentNode.parentNode === a && !n.parentNode._isSplit) && (q.push(n), n._x -= x, C(n, a, M) && (n._wordEnd = !0)), "BR" === n.nodeName && n.nextSibling && "BR" === n.nextSibling.nodeName && P.push([])));
			for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, "BR" !== n.nodeName ? (S && (s = n.style, Q || p || (n._x += n.parentNode._x, n._y += n.parentNode._y), s.left = n._x + "px", s.top = n._y + "px", s.position = "absolute", s.display = "block", s.width = n._w + 1 + "px", s.height = n._h + "px"), !Q && R ? n._isSplit ? (n._next = n.nextSibling, n.parentNode.appendChild(n)) : n.parentNode._isSplit ? (n._parent = n.parentNode, !n.previousSibling && n.firstChild && (n.firstChild._isFirst = !0), n.nextSibling && " " === n.nextSibling.textContent && !n.nextSibling.nextSibling && V.push(n.nextSibling), n._next = n.nextSibling && n.nextSibling._isFirst ? null : n.nextSibling, n.parentNode.removeChild(n), o.splice(k--, 1), m--) : p || (v = !n.nextSibling && C(n.parentNode, a, M), n.parentNode._parent && n.parentNode._parent.appendChild(n), v && n.parentNode.appendChild(f.createTextNode(" ")), b.span && (n.style.display = "inline"), J.push(n)) : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML ? K.push(n) : R && !n._isSplit && (b.span && (n.style.display = "inline"), J.push(n))) : P || S ? (n.parentNode && n.parentNode.removeChild(n), o.splice(k--, 1), m--) : Q || a.appendChild(n);
			for (k = V.length; --k > -1;) V[k].parentNode.removeChild(V[k]);
			if (P) {
				for (S && (t = f.createElement(N), a.appendChild(t), u = t.offsetWidth + "px", v = t.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(t)), s = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
				for (r = " " === M && (!S || !Q && !R), k = 0; k < P.length; k++) {
					for (q = P[k], t = f.createElement(N), t.style.cssText = "display:block;text-align:" + I + ";position:" + (S ? "absolute;" : "relative;"), T && (t.className = T + (U ? k + 1 : "")), L.push(t), m = q.length, l = 0; m > l; l++) "BR" !== q[l].nodeName && (n = q[l], t.appendChild(n), r && n._wordEnd && t.appendChild(f.createTextNode(" ")), S && (0 === l && (t.style.top = n._y + "px", t.style.left = x + v + "px"), n.style.top = "0px", v && (n.style.left = n._x - v + "px")));
					0 === m ? t.innerHTML = "&nbsp;" : Q || R || (D(t), z(t, String.fromCharCode(160), " ")), S && (t.style.width = u, t.style.height = n._h + "px"), a.appendChild(t)
				}
				a.style.cssText = s
			}
			S && (j > a.clientHeight && (a.style.height = j - F + "px", a.clientHeight < j && (a.style.height = j + B + "px")), h > a.clientWidth && (a.style.width = h - G + "px", a.clientWidth < h && (a.style.width = h + E + "px"))), A(c, J), A(d, K), A(e, L)
		},
		F = function (a, b, c, d) {
			var g, h, i, j, k, p, v, w, x, y = b.span ? "span" : "div",
				A = b.type || b.split || "chars,words,lines",
				B = (-1 !== A.indexOf("words"), -1 !== A.indexOf("chars")),
				C = "absolute" === b.position || b.absolute === !0,
				D = b.wordDelimiter || " ",
				E = " " !== D ? "" : C ? "&#173; " : " ",
				F = b.span ? "</span>" : "</div>",
				G = !0,
				H = f.createElement("div"),
				I = a.parentNode;
			for (I.insertBefore(H, a), H.textContent = a.nodeValue, I.removeChild(a), a = H, g = e(a), v = -1 !== g.indexOf("<"), b.reduceWhiteSpace !== !1 && (g = g.replace(m, " ").replace(l, "")), v && (g = g.split("<").join("{{LT}}")), k = g.length, h = (" " === g.charAt(0) ? E : "") + c(), i = 0; k > i; i++)
				if (p = g.charAt(i), p === D && g.charAt(i - 1) !== D && i) {
					for (h += G ? F : "", G = !1; g.charAt(i + 1) === D;) h += E, i++;
					i === k - 1 ? h += E : ")" !== g.charAt(i + 1) && (h += E + c(), G = !0)
				} else "{" === p && "{{LT}}" === g.substr(i, 6) ? (h += B ? d() + "{{LT}}</" + y + ">" : "{{LT}}", i += 5) : p.charCodeAt(0) >= n && p.charCodeAt(0) <= o || g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039 ? (w = u(g.substr(i, 2)), x = u(g.substr(i + 2, 2)), j = w >= q && r >= w && x >= q && r >= x || x >= s && t >= x ? 4 : 2, h += B && " " !== p ? d() + g.substr(i, j) + "</" + y + ">" : g.substr(i, j), i += j - 1) : h += B && " " !== p ? d() + p + "</" + y + ">" : p;
			a.outerHTML = h + (G ? F : ""), v && z(I, "{{LT}}", "<")
		},
		G = function (a, b, c, d) {
			var e, f, g = B(a.childNodes),
				h = g.length,
				j = "absolute" === b.position || b.absolute === !0;
			if (3 !== a.nodeType || h > 1) {
				for (b.absolute = !1, e = 0; h > e; e++) f = g[e], (3 !== f.nodeType || /\S+/.test(f.nodeValue)) && (j && 3 !== f.nodeType && "inline" === i(f, "display", null, !0) && (f.style.display = "inline-block", f.style.position = "relative"), f._isSplit = !0, G(f, b, c, d));
				return b.absolute = j, void(a._isSplit = !0)
			}
			F(a, b, c, d)
		},
		H = y.prototype;
	H.split = function (a) {
		this.isSplit && this.revert(), this.vars = a = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		for (var b, c, d, e = this.elements.length, f = a.span ? "span" : "div", g = ("absolute" === a.position || a.absolute === !0, x(a.wordsClass, f)), h = x(a.charsClass, f); --e > -1;) d = this.elements[e], this._originals[e] = d.innerHTML, b = d.clientHeight, c = d.clientWidth, G(d, a, g, h), E(d, a, this.chars, this.words, this.lines, c, b);
		return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
	}, H.revert = function () {
		if (!this._originals) throw "revert() call wasn't scoped properly.";
		for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
		return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
	}, y.selector = a.$ || a.jQuery || function (b) {
		var c = a.$ || a.jQuery;
		return c ? (y.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
	}, y.version = "0.5.6"
}(_gsScope),
function (a) {
	"use strict";
	var b = function () {
		return (_gsScope.GreenSockGlobals || _gsScope)[a]
	};
	"function" == typeof define && define.amd ? define([], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");
try {
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;
	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);
} catch (e) {}
try {
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true)
	try {
		console.groupEnd();
	} catch (e) {}
	(function (e, t) {
		e.waitForImages = {
			hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
		};
		e.expr[":"].uncached = function (t) {
			var n = document.createElement("img");
			n.src = t.src;
			return e(t).is('img[src!=""]') && !n.complete
		};
		e.fn.waitForImages = function (t, n, r) {
			if (e.isPlainObject(arguments[0])) {
				n = t.each;
				r = t.waitForAll;
				t = t.finished
			}
			t = t || e.noop;
			n = n || e.noop;
			r = !!r;
			if (!e.isFunction(t) || !e.isFunction(n)) {
				throw new TypeError("An invalid callback was supplied.")
			}
			return this.each(function () {
				var i = e(this),
					s = [];
				if (r) {
					var o = e.waitForImages.hasImageProperties || [],
						u = /url\((['"]?)(.*?)\1\)/g;
					i.find("*").each(function () {
						var t = e(this);
						if (t.is("img:uncached")) {
							s.push({
								src: t.attr("src"),
								element: t[0]
							})
						}
						e.each(o, function (e, n) {
							var r = t.css(n);
							if (!r) {
								return true
							}
							var i;
							while (i = u.exec(r)) {
								s.push({
									src: i[2],
									element: t[0]
								})
							}
						})
					})
				} else {
					i.find("img:uncached").each(function () {
						s.push({
							src: this.src,
							element: this
						})
					})
				}
				var f = s.length,
					l = 0;
				if (f == 0) {
					t.call(i[0])
				}
				e.each(s, function (r, s) {
					var o = new Image;
					e(o).bind("load error", function (e) {
						l++;
						n.call(s.element, l, f, e.type == "load");
						if (l == f) {
							t.call(i[0]);
							return false
						}
					});
					o.src = s.src
				})
			})
		};
	})(jQuery);;
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.8 (10.06.2018)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/
! function (jQuery, undefined) {
	"use strict";
	var version = {
		core: "5.4.8",
		"revolution.extensions.actions.min.js": "2.1.0",
		"revolution.extensions.carousel.min.js": "1.2.1",
		"revolution.extensions.kenburn.min.js": "1.3.1",
		"revolution.extensions.layeranimation.min.js": "3.6.5",
		"revolution.extensions.navigation.min.js": "1.3.5",
		"revolution.extensions.parallax.min.js": "2.2.3",
		"revolution.extensions.slideanims.min.js": "1.8",
		"revolution.extensions.video.min.js": "2.2.2"
	};
	jQuery.fn.extend({
		revolution: function (i) {
			var e = {
				delay: 9e3,
				responsiveLevels: 4064,
				visibilityLevels: [2048, 1024, 778, 480],
				gridwidth: 960,
				gridheight: 500,
				minHeight: 0,
				autoHeight: "off",
				sliderType: "standard",
				sliderLayout: "auto",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0",
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLimit: 0,
				hideSliderAtLimit: 0,
				disableProgressBar: "off",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				shadow: 0,
				dottedOverlay: "none",
				startDelay: 0,
				lazyType: "smart",
				spinner: "spinner0",
				shuffle: "off",
				viewPort: {
					enable: !1,
					outof: "wait",
					visible_area: "60%",
					presize: !1
				},
				fallbacks: {
					isJoomla: !1,
					panZoomDisableOnMobile: "off",
					simplifyAll: "on",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: !0,
					ignoreHeightChanges: "off",
					ignoreHeightChangesSize: 0,
					allowHTML5AutoPlayOnAndroid: !0
				},
				parallax: {
					type: "off",
					levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
					origo: "enterpoint",
					speed: 400,
					bgparallax: "off",
					opacity: "on",
					disable_onmobile: "off",
					ddd_shadow: "on",
					ddd_bgfreeze: "off",
					ddd_overflow: "visible",
					ddd_layer_overflow: "visible",
					ddd_z_correction: 65,
					ddd_path: "mouse"
				},
				scrolleffect: {
					fade: "off",
					blur: "off",
					scale: "off",
					grayscale: "off",
					maxblur: 10,
					on_layers: "off",
					on_slidebg: "off",
					on_static_layers: "off",
					on_parallax_layers: "off",
					on_parallax_static_layers: "off",
					direction: "both",
					multiplicator: 1.35,
					multiplicator_layers: .5,
					tilt: 30,
					disable_on_mobile: "on"
				},
				carousel: {
					easing: punchgs.Power3.easeInOut,
					speed: 800,
					showLayersAllTime: "off",
					horizontal_align: "center",
					vertical_align: "center",
					infinity: "on",
					space: 0,
					maxVisibleItems: 3,
					stretch: "off",
					fadeout: "on",
					maxRotation: 0,
					minScale: 0,
					vary_fade: "off",
					vary_rotation: "on",
					vary_scale: "off",
					border_radius: "0px",
					padding_top: 0,
					padding_bottom: 0
				},
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "on",
					touch: {
						touchenabled: "off",
						touchOnDesktop: "off",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: !1,
						swipe_direction: "horizontal"
					},
					arrows: {
						style: "",
						enable: !1,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: "",
						rtl: !1,
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						}
					},
					bullets: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						h_align: "left",
						v_align: "center",
						space: 0,
						h_offset: 20,
						v_offset: 0,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
					},
					thumbnails: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						height: 50,
						min_width: 100,
						wrapper_padding: 2,
						wrapper_color: "#f5f5f5",
						wrapper_opacity: 1,
						tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						position: "inner",
						space: 2,
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					tabs: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						min_width: 100,
						height: 50,
						wrapper_padding: 10,
						wrapper_color: "#f5f5f5",
						wrapper_opacity: 1,
						tmp: '<span class="tp-tab-image"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						space: 0,
						position: "inner",
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				},
				extensions: "extensions/",
				extensions_suffix: ".min.js",
				debugMode: !1
			};
			return i = jQuery.extend(!0, {}, e, i), this.each(function () {
				var e = jQuery(this);
				i.minHeight = i.minHeight != undefined ? parseInt(i.minHeight, 0) : i.minHeight, i.scrolleffect.on = "on" === i.scrolleffect.fade || "on" === i.scrolleffect.scale || "on" === i.scrolleffect.blur || "on" === i.scrolleffect.grayscale, "hero" == i.sliderType && e.find(">ul>li").each(function (e) {
					0 < e && jQuery(this).remove()
				}), i.jsFileLocation = i.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), i.jsFileLocation = i.jsFileLocation + i.extensions, i.scriptsneeded = getNeededScripts(i, e), i.curWinRange = 0, i.rtl = !0, i.navigation != undefined && i.navigation.touch != undefined && (i.navigation.touch.swipe_min_touches = 5 < i.navigation.touch.swipe_min_touches ? 1 : i.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function () {
					if (i.modulesfailing) return e.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + i.errorm + "</div>").show(), !1;
					_R.migration != undefined && (i = _R.migration(e, i)), punchgs.force3D = !0, "on" !== i.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(e, i), initSlider(e, i)
				}), e[0].opt = i, waitForScripts(e, i)
			})
		},
		getRSVersion: function (e) {
			if (!0 === e) return jQuery("body").data("tp_rs_version");
			var i = jQuery("body").data("tp_rs_version"),
				t = "";
			for (var a in t += "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n", t += "---------------------------------------------------------\n", i) t += i[a].alias + ": " + i[a].ver + "\n";
			return t += "---------------------------------------------------------\n"
		},
		revremoveslide: function (r) {
			return this.each(function () {
				var e = jQuery(this),
					i = e[0].opt;
				if (!(r < 0 || r > i.slideamount) && e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && i && 0 < i.li.length && (0 < r || r <= i.li.length)) {
					var t = jQuery(i.li[r]),
						a = t.data("index"),
						n = !1;
					i.slideamount = i.slideamount - 1, i.realslideamount = i.realslideamount - 1, removeNavWithLiref(".tp-bullet", a, i), removeNavWithLiref(".tp-tab", a, i), removeNavWithLiref(".tp-thumb", a, i), t.hasClass("active-revslide") && (n = !0), t.remove(), i.li = removeArray(i.li, r), i.carousel && i.carousel.slides && (i.carousel.slides = removeArray(i.carousel.slides, r)), i.thumbs = removeArray(i.thumbs, r), _R.updateNavIndexes && _R.updateNavIndexes(i), n && e.revnext(), punchgs.TweenLite.set(i.li, {
						minWidth: "99%"
					}), punchgs.TweenLite.set(i.li, {
						minWidth: "100%"
					})
				}
			})
		},
		revaddcallback: function (e) {
			return this.each(function () {
				this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(e))
			})
		},
		revgetparallaxproc: function () {
			return jQuery(this)[0].opt.scrollproc
		},
		revdebugmode: function () {
			return this.each(function () {
				var e = jQuery(this);
				e[0].opt.debugMode = !0, containerResized(e, e[0].opt)
			})
		},
		revscroll: function (i) {
			return this.each(function () {
				var e = jQuery(this);
				jQuery("body,html").animate({
					scrollTop: e.offset().top + e.height() - i + "px"
				}, {
					duration: 400
				})
			})
		},
		revredraw: function (e) {
			return this.each(function () {
				var e = jQuery(this);
				containerResized(e, e[0].opt)
			})
		},
		revkill: function (e) {
			var i = this,
				t = jQuery(this);
			if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), t != undefined && 0 < t.length && 0 < jQuery("body").find("#" + t.attr("id")).length) {
				t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause");
				var a = t.parent().find(".tp-bannertimer"),
					n = t[0].opt;
				n.tonpause = !0, t.trigger("stoptimer");
				var r = "resize.revslider-" + t.attr("id");
				jQuery(window).unbind(r), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), t.unbind("hover, mouseover, mouseenter,mouseleave, resize");
				r = "resize.revslider-" + t.attr("id");
				jQuery(window).off(r), t.find("*").each(function () {
					var e = jQuery(this);
					e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null
				}), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), a.remove();
				try {
					t.closest(".forcefullwidth_wrapper_tp_banner").remove()
				} catch (e) {}
				try {
					t.closest(".rev_slider_wrapper").remove()
				} catch (e) {}
				try {
					t.remove()
				} catch (e) {}
				return t.empty(), t.html(), n = t = null, delete i.c, delete i.opt, delete i.container, !0
			}
			return !1
		},
		revpause: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause"), e[0].opt.tonpause = !0, e.trigger("stoptimer"))
			})
		},
		revresume: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume"), e[0].opt.tonpause = !1, e.trigger("starttimer"))
			})
		},
		revstart: function () {
			var e = jQuery(this);
			if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && e[0].opt !== undefined) return e[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : ((e[0].opt.c = e)[0].opt.ul = e.find(">ul"), runSlider(e, e[0].opt), !0)
		},
		revnext: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, 1)
			})
		},
		revprev: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, -1)
			})
		},
		revmaxslide: function () {
			return jQuery(this).find(".tp-revslider-mainul >li").length
		},
		revcurrentslide: function () {
			var e = jQuery(this);
			if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length) return parseInt(e[0].opt.act, 0) + 1
		},
		revlastslide: function () {
			return jQuery(this).find(".tp-revslider-mainul >li").length
		},
		revshowslide: function (i) {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, "to" + (i - 1))
			})
		},
		revcallslidewithid: function (i) {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, i)
			})
		}
	});
	var _R = jQuery.fn.revolution;
	jQuery.extend(!0, _R, {
		getversion: function () {
			return version
		},
		compare_version: function (e) {
			var i = jQuery("body").data("tp_rs_version");
			return (i = i === undefined ? new Object : i).Core === undefined && (i.Core = new Object, i.Core.alias = "Slider Revolution Core", i.Core.name = "jquery.themepunch.revolution.min.js", i.Core.ver = _R.getversion().core), "stop" != e.check && (_R.getversion().core < e.min_core ? (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + e.min_core + ") from " + e.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop") : _R.getversion()[e.name] != undefined && e.version < _R.getversion()[e.name] && (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + e.alias + " (" + e.version + ") is older than requiered (" + _R.getversion()[e.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop")), i[e.alias] === undefined && (i[e.alias] = new Object, i[e.alias].alias = e.alias, i[e.alias].ver = e.version, i[e.alias].name = e.name), jQuery("body").data("tp_rs_version", i), e
		},
		currentSlideIndex: function (e) {
			var i = e.c.find(".active-revslide").index();
			return i = -1 == i ? 0 : i
		},
		simp: function (e, i, t) {
			var a = Math.abs(e) - Math.floor(Math.abs(e / i)) * i;
			return t ? a : e < 0 ? -1 * a : a
		},
		iOSVersion: function () {
			var e = !1;
			return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
		},
		isIE: function (e, i) {
			var t = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
			t.html("\x3c!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]--\x3e");
			var a = t.find("a").length;
			return t.remove(), a
		},
		is_mobile: function () {
			var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
				i = !1;
			for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0);
			return i
		},
		is_android: function () {
			var e = ["android", "Android"],
				i = !1;
			for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0);
			return i
		},
		callBackHandling: function (e, t, a) {
			try {
				e.callBackArray && jQuery.each(e.callBackArray, function (e, i) {
					i && i.inmodule && i.inmodule === t && i.atposition && i.atposition === a && i.callback && i.callback.call()
				})
			} catch (e) {
				console.log("Call Back Failed")
			}
		},
		get_browser: function () {
			var e, i = navigator.appName,
				t = navigator.userAgent,
				a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[0]
		},
		get_browser_version: function () {
			var e, i = navigator.appName,
				t = navigator.userAgent,
				a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[1]
		},
		isSafari11: function () {
			var e = jQuery.trim(_R.get_browser().toLowerCase());
			return -1 === jQuery.trim(navigator.userAgent.toLowerCase()).search("edge") && "msie" !== e && e.match(/safari|chrome/)
		},
		getHorizontalOffset: function (e, i) {
			var t = gWiderOut(e, ".outer-left"),
				a = gWiderOut(e, ".outer-right");
			switch (i) {
				case "left":
					return t;
				case "right":
					return a;
				case "both":
					return t + a
			}
		},
		callingNewSlide: function (e, i) {
			var t = 0 < e.find(".next-revslide").length ? e.find(".next-revslide").index() : 0 < e.find(".processing-revslide").length ? e.find(".processing-revslide").index() : e.find(".active-revslide").index(),
				a = 0,
				n = e[0].opt;
			e.find(".next-revslide").removeClass("next-revslide"), e.find(".active-revslide").hasClass("tp-invisible-slide") && (t = n.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (a = 1 === i || -1 === i ? (a = t + i) < 0 ? n.slideamount - 1 : a >= n.slideamount ? 0 : a : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0)) < 0 ? 0 : i > n.slideamount - 1 ? n.slideamount - 1 : i, e.find(".tp-revslider-slidesli:eq(" + a + ")").addClass("next-revslide")) : i && e.find(".tp-revslider-slidesli").each(function () {
				var e = jQuery(this);
				e.data("index") === i && e.addClass("next-revslide")
			}), a = e.find(".next-revslide").index(), e.trigger("revolution.nextslide.waiting"), t === a && t === n.last_shown_slide || a !== t && -1 != a ? swapSlide(e) : e.find(".next-revslide").removeClass("next-revslide")
		},
		slotSize: function (e, i) {
			i.slotw = Math.ceil(i.width / i.slots), "fullscreen" == i.sliderLayout ? i.sloth = Math.ceil(jQuery(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && e !== undefined && "" !== e && (i.sloth = Math.ceil(e.height() / i.slots))
		},
		setSize: function (e) {
			var i = (e.top_outer || 0) + (e.bottom_outer || 0),
				t = parseInt(e.carousel.padding_top || 0, 0),
				a = parseInt(e.carousel.padding_bottom || 0, 0),
				n = e.gridheight[e.curWinRange],
				r = 0,
				o = -1 === e.nextSlide || e.nextSlide === undefined ? 0 : e.nextSlide;
			if (e.paddings = e.paddings === undefined ? {
					top: parseInt(e.c.parent().css("paddingTop"), 0) || 0,
					bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0
				} : e.paddings, e.rowzones && 0 < e.rowzones.length)
				for (var s = 0; s < e.rowzones[o].length; s++) r += e.rowzones[o][s][0].offsetHeight;
			if (n = (n = n < e.minHeight ? e.minHeight : n) < r ? r : n, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, {
					maxHeight: n + "px"
				}), e.c.css({
					marginTop: t,
					marginBottom: a
				}), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) {
				e.height = e.bw * e.gridheight[e.curWinRange];
				e.c.parent().width();
				var l = jQuery(window).height();
				if (e.fullScreenOffsetContainer != undefined) {
					try {
						var d = e.fullScreenOffsetContainer.split(",");
						d && jQuery.each(d, function (e, i) {
							l = 0 < jQuery(i).length ? l - jQuery(i).outerHeight(!0) : l
						})
					} catch (e) {}
					try {
						1 < e.fullScreenOffset.split("%").length && e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length ? l -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length && (l -= parseInt(e.fullScreenOffset, 0))
					} catch (e) {}
				}
				l = l < e.minHeight ? e.minHeight : l, l -= i, e.c.parent().height(l), e.c.closest(".rev_slider_wrapper").height(l), e.c.css({
					height: "100%"
				}), e.height = l, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height
			} else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height, e.c.height(e.height);
			var c = {
				height: t + a + i + e.height + e.paddings.top + e.paddings.bottom
			};
			e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), e.c.closest(".rev_slider_wrapper").css(c), setScale(e)
		},
		enterInViewPort: function (t) {
			t.waitForCountDown && (countDown(t.c, t), t.waitForCountDown = !1), t.waitForFirstSlide && (swapSlide(t.c), t.waitForFirstSlide = !1, setTimeout(function () {
				t.c.removeClass("tp-waitforfirststart")
			}, 500)), "playing" != t.sliderlaststatus && t.sliderlaststatus != undefined || t.c.trigger("starttimer"), t.lastplayedvideos != undefined && 0 < t.lastplayedvideos.length && jQuery.each(t.lastplayedvideos, function (e, i) {
				_R.playVideo(i, t)
			})
		},
		leaveViewPort: function (t) {
			t.sliderlaststatus = t.sliderstatus, t.c.trigger("stoptimer"), t.playingvideos != undefined && 0 < t.playingvideos.length && (t.lastplayedvideos = jQuery.extend(!0, [], t.playingvideos), t.playingvideos && jQuery.each(t.playingvideos, function (e, i) {
				t.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(i, t)
			}))
		},
		unToggleState: function (e) {
			e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
				i.removeClass("rs-toggle-content-active")
			})
		},
		toggleState: function (e) {
			e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
				i.addClass("rs-toggle-content-active")
			})
		},
		swaptoggleState: function (e) {
			e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
				jQuery(i).hasClass("rs-toggle-content-active") ? jQuery(i).removeClass("rs-toggle-content-active") : jQuery(i).addClass("rs-toggle-content-active")
			})
		},
		lastToggleState: function (e) {
			var t = 0;
			return e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
				t = i.hasClass("rs-toggle-content-active")
			}), t
		}
	});
	var _ISM = _R.is_mobile(),
		_ANDROID = _R.is_android(),
		checkIDS = function (e, i) {
			if (e.anyid = e.anyid === undefined ? [] : e.anyid, -1 != jQuery.inArray(i.attr("id"), e.anyid)) {
				var t = i.attr("id") + "_" + Math.round(9999 * Math.random());
				i.attr("id", t)
			}
			e.anyid.push(i.attr("id"))
		},
		removeArray = function (e, t) {
			var a = [];
			return jQuery.each(e, function (e, i) {
				e != t && a.push(i)
			}), a
		},
		removeNavWithLiref = function (e, i, t) {
			t.c.find(e).each(function () {
				var e = jQuery(this);
				e.data("liref") === i && e.remove()
			})
		},
		lAjax = function (i, t) {
			return !jQuery("body").data(i) && (t.filesystem ? (t.errorm === undefined && (t.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), t.errorm = t.errorm + '<br>&lt;script type="text/javascript" src="' + t.jsFileLocation + i + t.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(t.jsFileLocation + i + t.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), !(t.modulesfailing = !0)) : (jQuery.ajax({
				url: t.jsFileLocation + i + t.extensions_suffix + "?version=" + version.core,
				dataType: "script",
				cache: !0,
				error: function (e) {
					console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + t.extensions_suffix + " on Path:" + t.jsFileLocation), console.info(e)
				}
			}), void jQuery("body").data(i, !0)))
		},
		getNeededScripts = function (t, e) {
			var i = new Object,
				a = t.navigation;
			return i.kenburns = !1, i.parallax = !1, i.carousel = !1, i.navigation = !1, i.videos = !1, i.actions = !1, i.layeranim = !1, i.migration = !1, e.data("version") && e.data("version").toString().match(/5./gi) ? (e.find("img").each(function () {
				"on" == jQuery(this).data("kenburns") && (i.kenburns = !0)
			}), ("carousel" == t.sliderType || "on" == a.keyboardNavigation || "on" == a.mouseScrollNavigation || "on" == a.touch.touchenabled || a.arrows.enable || a.bullets.enable || a.thumbnails.enable || a.tabs.enable) && (i.navigation = !0), e.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function () {
				var e = jQuery(this);
				(e.data("ytid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("youtube")) && (i.videos = !0), (e.data("vimeoid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")) && (i.videos = !0), e.data("actions") !== undefined && (i.actions = !0), i.layeranim = !0
			}), e.find("li").each(function () {
				jQuery(this).data("link") && jQuery(this).data("link") != undefined && (i.layeranim = !0, i.actions = !0)
			}), !i.videos && (0 < e.find(".rs-background-video-layer").length || 0 < e.find(".tp-videolayer").length || 0 < e.find(".tp-audiolayer").length || 0 < e.find("iframe").length || 0 < e.find("video").length) && (i.videos = !0), "carousel" == t.sliderType && (i.carousel = !0), ("off" !== t.parallax.type || t.viewPort.enable || "true" == t.viewPort.enable || "true" === t.scrolleffect.on || t.scrolleffect.on) && (i.parallax = !0)) : (i.kenburns = !0, i.parallax = !0, i.carousel = !1, i.navigation = !0, i.videos = !0, i.actions = !0, i.layeranim = !0, i.migration = !0), "hero" == t.sliderType && (i.carousel = !1, i.navigation = !1), window.location.href.match(/file:/gi) && (i.filesystem = !0, t.filesystem = !0), i.videos && void 0 === _R.isVideoPlaying && lAjax("revolution.extension.video", t), i.carousel && void 0 === _R.prepareCarousel && lAjax("revolution.extension.carousel", t), i.carousel || void 0 !== _R.animateSlide || lAjax("revolution.extension.slideanims", t), i.actions && void 0 === _R.checkActions && lAjax("revolution.extension.actions", t), i.layeranim && void 0 === _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", t), i.kenburns && void 0 === _R.stopKenBurn && lAjax("revolution.extension.kenburn", t), i.navigation && void 0 === _R.createNavigation && lAjax("revolution.extension.navigation", t), i.migration && void 0 === _R.migration && lAjax("revolution.extension.migration", t), i.parallax && void 0 === _R.checkForParallax && lAjax("revolution.extension.parallax", t), t.addons != undefined && 0 < t.addons.length && jQuery.each(t.addons, function (e, i) {
				"object" == typeof i && i.fileprefix != undefined && lAjax(i.fileprefix, t)
			}), i
		},
		waitForScripts = function (e, i) {
			var t = !0,
				a = i.scriptsneeded;
			i.addons != undefined && 0 < i.addons.length && jQuery.each(i.addons, function (e, i) {
				"object" == typeof i && i.init != undefined && _R[i.init] === undefined && (t = !1)
			}), a.filesystem || "undefined" != typeof punchgs && t && (!a.kenburns || a.kenburns && void 0 !== _R.stopKenBurn) && (!a.navigation || a.navigation && void 0 !== _R.createNavigation) && (!a.carousel || a.carousel && void 0 !== _R.prepareCarousel) && (!a.videos || a.videos && void 0 !== _R.resetVideo) && (!a.actions || a.actions && void 0 !== _R.checkActions) && (!a.layeranim || a.layeranim && void 0 !== _R.handleStaticLayers) && (!a.migration || a.migration && void 0 !== _R.migration) && (!a.parallax || a.parallax && void 0 !== _R.checkForParallax) && (a.carousel || !a.carousel && void 0 !== _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function () {
				waitForScripts(e, i)
			}, 50)
		},
		getScriptLocation = function (e) {
			var i = new RegExp("themepunch.revolution.min.js", "gi"),
				t = "";
			return jQuery("script").each(function () {
				var e = jQuery(this).attr("src");
				e && e.match(i) && (t = e)
			}), t = (t = (t = t.replace("jquery.themepunch.revolution.min.js", "")).replace("jquery.themepunch.revolution.js", "")).split("?")[0]
		},
		setCurWinRange = function (e, i) {
			var t = 9999,
				a = 0,
				n = 0,
				r = 0,
				o = jQuery(window).width(),
				s = i && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
			s && s.length && jQuery.each(s, function (e, i) {
				o < i && (0 == a || i < a) && (r = e, a = t = i), i < o && a < i && (a = i, n = e)
			}), a < t && (r = n), i ? e.forcedWinRange = r : e.curWinRange = r
		},
		prepareOptions = function (e, i) {
			i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%"
		},
		gWiderOut = function (e, i) {
			var t = 0;
			return e.find(i).each(function () {
				var e = jQuery(this);
				!e.hasClass("tp-forcenotvisible") && t < e.outerWidth() && (t = e.outerWidth())
			}), t
		},
		initSlider = function (container, opt) {
			if (container == undefined) return !1;
			container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function (e) {
				var i = jQuery(this);
				"on" == i.data("hideslideonmobile") && _ISM && i.remove(), (i.data("invisible") || !0 === i.data("invisible")) && (i.addClass("tp-invisible-slide"), i.appendTo(opt.ul))
			}), opt.addons != undefined && 0 < opt.addons.length && jQuery.each(opt.addons, function (i, obj) {
				"object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params))
			}), opt.cid = container.attr("id"), opt.ul.css({
				visibility: "visible"
			}), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), 1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt))
		},
		onFullScreenChange = function () {
			jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function () {
				jQuery(window).trigger("resize")
			}, 200)
		},
		runSlider = function (t, x) {
			if (x.sliderisrunning = !0, x.ul.find(">li").each(function (e) {
					jQuery(this).data("originalindex", e)
				}), x.allli = x.ul.find(">li"), jQuery.each(x.allli, function (e, i) {
					(i = jQuery(i)).data("origindex", i.index())
				}), x.li = x.ul.find(">li").not(".tp-invisible-slide"), "on" == x.shuffle) {
				var e = new Object,
					i = x.ul.find(">li:first-child");
				e.fstransition = i.data("fstransition"), e.fsmasterspeed = i.data("fsmasterspeed"), e.fsslotamount = i.data("fsslotamount");
				for (var a = 0; a < x.slideamount; a++) {
					var n = Math.round(Math.random() * x.slideamount);
					x.ul.find(">li:eq(" + n + ")").prependTo(x.ul)
				}
				var r = x.ul.find(">li:first-child");
				r.data("fstransition", e.fstransition), r.data("fsmasterspeed", e.fsmasterspeed), r.data("fsslotamount", e.fsslotamount), x.allli = x.ul.find(">li"), x.li = x.ul.find(">li").not(".tp-invisible-slide")
			}
			if (x.inli = x.ul.find(">li.tp-invisible-slide"), x.thumbs = new Array, x.slots = 4, x.act = -1, x.firststart = 1, x.loadqueue = new Array, x.syncload = 0, x.conw = t.width(), x.conh = t.height(), 1 < x.responsiveLevels.length ? x.responsiveLevels[0] = 9999 : x.responsiveLevels = 9999, jQuery.each(x.allli, function (e, i) {
					var t = (i = jQuery(i)).find(".rev-slidebg") || i.find("img").first(),
						a = 0;
					i.addClass("tp-revslider-slidesli"), i.data("index") === undefined && i.data("index", "rs-" + Math.round(999999 * Math.random()));
					var n = new Object;
					n.params = new Array, n.id = i.data("index"), n.src = i.data("thumb") !== undefined ? i.data("thumb") : t.data("lazyload") !== undefined ? t.data("lazyload") : t.attr("src"), i.data("title") !== undefined && n.params.push({
						from: RegExp("\\{\\{title\\}\\}", "g"),
						to: i.data("title")
					}), i.data("description") !== undefined && n.params.push({
						from: RegExp("\\{\\{description\\}\\}", "g"),
						to: i.data("description")
					});
					for (a = 1; a <= 10; a++) i.data("param" + a) !== undefined && n.params.push({
						from: RegExp("\\{\\{param" + a + "\\}\\}", "g"),
						to: i.data("param" + a)
					});
					if (x.thumbs.push(n), i.data("link") != undefined) {
						var r = i.data("link"),
							o = i.data("target") || "_self",
							s = "back" === i.data("slideindex") ? 0 : 60,
							l = i.data("linktoslide"),
							d = l;
						l != undefined && "next" != l && "prev" != l && x.allli.each(function () {
							var e = jQuery(this);
							e.data("origindex") + 1 == d && (l = e.data("index"))
						}), "slide" != r && (l = "no");
						var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + s + ';" data-x="center" data-y="center" data-basealign="slide" ',
							u = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
						c = "no" == l ? c + u + " >" : c + "data-actions='" + ("scroll_under" === l ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === l ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === l ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + l + '","delay":"0.2"}]') + "'" + u + " >", c += '<a style="width:100%;height:100%;display:block"', c = "slide" != r ? c + ' target="' + o + '" href="' + r + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(c)
					}
				}), x.rle = x.responsiveLevels.length || 1, x.gridwidth = cArray(x.gridwidth, x.rle), x.gridheight = cArray(x.gridheight, x.rle), "on" == x.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (t.find(".tp-caption").each(function () {
					var e = jQuery(this);
					e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
				}), x.allli.each(function () {
					var e = jQuery(this);
					e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1), (e.find(".rev-slidebg") || e.find(">img").first()).data("kenburns", "off")
				})), x.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), x.autoHeight = "fullscreen" == x.sliderLayout ? "on" : x.autoHeight, "fullwidth" == x.sliderLayout && "off" == x.autoHeight && t.css({
					maxHeight: x.gridheight[x.curWinRange] + "px"
				}), "auto" != x.sliderLayout && 0 == t.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== x.sliderLayout || "on" != x.fullScreenAutoWidth)) {
				var o = t.parent(),
					s = o.css("marginBottom"),
					l = o.css("marginTop"),
					d = t.attr("id") + "_forcefullwidth";
				s = s === undefined ? 0 : s, l = l === undefined ? 0 : l, o.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + d + '" style="position:relative;width:100%;height:auto;margin-top:' + l + ";margin-bottom:" + s + '"></div>'), t.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + t.height() + 'px"></div>'), t.parent().css({
					marginTop: "0px",
					marginBottom: "0px"
				}), t.parent().css({
					position: "absolute"
				})
			}
			if (x.shadow !== undefined && 0 < x.shadow && (t.parent().addClass("tp-shadow" + x.shadow), t.parent().append('<div class="tp-shadowcover"></div>'), t.parent().find(".tp-shadowcover").css({
					backgroundColor: t.parent().css("backgroundColor"),
					backgroundImage: t.parent().css("backgroundImage")
				})), setCurWinRange(x), setCurWinRange(x, !0), !t.hasClass("revslider-initialised")) {
				t.addClass("revslider-initialised"), t.addClass("tp-simpleresponsive"), t.attr("id") == undefined && t.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(x, t), x.firefox13 = !1, x.ie = !jQuery.support.opacity, x.ie9 = 9 == document.documentMode, x.origcd = x.delay;
				var c = jQuery.fn.jquery.split("."),
					u = parseFloat(c[0]),
					p = parseFloat(c[1]);
				parseFloat(c[2] || "0");
				1 == u && p < 7 && t.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + c + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), 1 < u && (x.ie = !1);
				var j = new Object;
				j.addedyt = 0, j.addedvim = 0, j.addedvid = 0, x.scrolleffect.on && (x.scrolleffect.layers = new Array), t.find(".tp-caption, .rs-background-video-layer").each(function (e) {
					var n = jQuery(this),
						i = n.data(),
						t = i.autoplayonlyfirsttime,
						a = i.autoplay,
						r = (i.videomp4 !== undefined || i.videowebm !== undefined || i.videoogv, n.hasClass("tp-audiolayer")),
						o = i.videoloop,
						s = !0,
						l = !1;
					i.startclasses = n.attr("class"), i.isparallaxlayer = 0 <= i.startclasses.indexOf("rs-parallax"), n.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(n, x), x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_static_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_static_layers && !i.isparallaxlayer) && (l = !0), s = !1);
					var d = n.data("noposteronmobile") || n.data("noPosterOnMobile") || n.data("posteronmobile") || n.data("posterOnMobile") || n.data("posterOnMObile");
					n.data("noposteronmobile", d);
					var c = 0;
					if (n.find("iframe").each(function () {
							punchgs.TweenLite.set(jQuery(this), {
								autoAlpha: 0
							}), c++
						}), 0 < c && n.data("iframes", !0), n.hasClass("tp-caption")) {
						var u = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
							p = n.data(),
							f = "",
							h = p.type,
							g = "row" === h || "column" === h ? "relative" : "absolute",
							v = "";
						"row" === h ? (n.addClass("rev_row").removeClass("tp-resizeme"), v = "rev_row_wrap") : "column" === h ? (f = p.verticalalign === undefined ? " vertical-align:bottom;" : " vertical-align:" + p.verticalalign + ";", v = "rev_column", n.addClass("rev_column_inner").removeClass("tp-resizeme"), n.data("width", "auto"), punchgs.TweenLite.set(n, {
							width: "auto"
						})) : "group" === h && n.removeClass("tp-resizeme");
						var m = "",
							y = "";
						"row" !== h && "group" !== h && "column" !== h ? (m = "display:" + n.css("display") + ";", 0 < n.closest(".rev_column").length ? (n.addClass("rev_layer_in_column"), s = !1) : 0 < n.closest(".rev_group").length && (n.addClass("rev_layer_in_group"), s = !1)) : "column" === h && (s = !1), p.wrapper_class !== undefined && (v = v + " " + p.wrapper_class), p.wrapper_id !== undefined && (y = 'id="' + p.wrapper_id + '"');
						var w = "";
						n.hasClass("tp-no-events") && (w = ";pointer-events:none"), n.wrap("<div " + y + ' class="tp-parallax-wrap ' + v + '" style="' + f + " " + u + "position:" + g + ";" + m + ";visibility:hidden" + w + '"><div class="tp-loop-wrap" style="' + u + "position:" + g + ";" + m + ';"><div class="tp-mask-wrap" style="' + u + "position:" + g + ";" + m + ';" ></div></div></div>'), s && x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_layers && !i.isparallaxlayer) && x.scrolleffect.layers.push(n.parent()), l && x.scrolleffect.layers.push(n.parent()), "column" === h && (n.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'), n.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));
						var b = n.closest(".tp-loop-wrap");
						jQuery.each(["pendulum", "rotate", "slideloop", "pulse", "wave"], function (e, i) {
							var t = n.find(".rs-" + i),
								a = t.data() || "";
							"" != a && (b.data(a), b.addClass("rs-" + i), t.children(0).unwrap(), n.data("loopanimation", "on"))
						}), n.attr("id") === undefined && n.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(x, n), punchgs.TweenLite.set(n, {
							visibility: "hidden"
						})
					}
					var _ = n.data("actions");
					_ !== undefined && _R.checkActions(n, x, _), checkHoverDependencies(n, x), _R.checkVideoApis && (j = _R.checkVideoApis(n, x, j)), r || 1 != t && "true" != t && "1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), r || 1 != a && "true" != a && "on" != a && "no1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
				}), t[0].addEventListener("mouseenter", function () {
					t.trigger("tp-mouseenter"), x.overcontainer = !0
				}, {
					passive: !0
				}), t[0].addEventListener("mouseover", function () {
					t.trigger("tp-mouseover"), x.overcontainer = !0
				}, {
					passive: !0
				}), t[0].addEventListener("mouseleave", function () {
					t.trigger("tp-mouseleft"), x.overcontainer = !1
				}, {
					passive: !0
				}), t.find(".tp-caption video").each(function (e) {
					var i = jQuery(this);
					i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
						display: "none"
					})
				}), "standard" !== x.sliderType && (x.lazyType = "all"), loadImages(t.find(".tp-static-layers"), x, 0, !0), waitForCurrentImages(t.find(".tp-static-layers"), x, function () {
					t.find(".tp-static-layers img").each(function () {
						var e = jQuery(this),
							i = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
							t = getLoadObj(x, i);
						e.attr("src", t.src)
					})
				}), x.rowzones = [], x.allli.each(function (e) {
					var i = jQuery(this);
					x.rowzones[e] = [], i.find(".rev_row_zone").each(function () {
						x.rowzones[e].push(jQuery(this))
					}), "all" != x.lazyType && ("smart" != x.lazyType || 0 != e && 1 != e && e != x.slideamount && e != x.slideamount - 1) || (loadImages(i, x, e), waitForCurrentImages(i, x, function () {}))
				});
				var f = getUrlVars("#")[0];
				if (f.length < 9 && 1 < f.split("slide").length) {
					var h = parseInt(f.split("slide")[1], 0);
					h < 1 && (h = 1), h > x.slideamount && (h = x.slideamount), x.startWithSlide = h - 1
				}
				t.append('<div class="tp-loader ' + x.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), x.loader = t.find(".tp-loader"), 0 === t.find(".tp-bannertimer").length && t.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), t.find(".tp-bannertimer").css({
					width: "0%"
				}), x.ul.css({
					display: "block"
				}), prepareSlides(t, x), ("off" !== x.parallax.type || x.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(t, x), _R.setSize(x), "hero" !== x.sliderType && _R.createNavigation && _R.createNavigation(t, x), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(x), contWidthManager(x);
				var g = x.viewPort;
				x.inviewport = !1, g != undefined && g.enable && (jQuery.isNumeric(g.visible_area) || -1 !== g.visible_area.indexOf("%") && (g.visible_area = parseInt(g.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(x, t)), "carousel" === x.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(x.ul, {
					opacity: 0
				}), _R.prepareCarousel(x, new punchgs.TimelineLite, undefined, 0), x.onlyPreparedSlide = !0), setTimeout(function () {
					if (!g.enable || g.enable && x.inviewport || g.enable && !x.inviewport && "wait" == !g.outof) swapSlide(t);
					else if (x.c.addClass("tp-waitforfirststart"), x.waitForFirstSlide = !0, g.presize) {
						var e = jQuery(x.li[0]);
						loadImages(e, x, 0, !0), waitForCurrentImages(e.find(".tp-layers"), x, function () {
							_R.animateTheCaptions({
								slide: e,
								opt: x,
								preset: !0
							})
						})
					}
					_R.manageNavigation && _R.manageNavigation(x), 1 < x.slideamount && (!g.enable || g.enable && x.inviewport ? countDown(t, x) : x.waitForCountDown = !0), setTimeout(function () {
						t.trigger("revolution.slide.onloaded")
					}, 100)
				}, x.startDelay), x.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, {
					passive: !0
				}), window.addEventListener("mozfullscreenchange", onFullScreenChange, {
					passive: !0
				}), window.addEventListener("webkitfullscreenchange", onFullScreenChange, {
					passive: !0
				});
				var v = "resize.revslider-" + t.attr("id");
				jQuery(window).on(v, function () {
					if (t == undefined) return !1;
					0 != jQuery("body").find(t) && contWidthManager(x);
					var e = !1;
					if ("fullscreen" == x.sliderLayout) {
						var i = jQuery(window).height();
						"mobile" == x.fallbacks.ignoreHeightChanges && _ISM || "always" == x.fallbacks.ignoreHeightChanges ? (x.fallbacks.ignoreHeightChangesSize = x.fallbacks.ignoreHeightChangesSize == undefined ? 0 : x.fallbacks.ignoreHeightChangesSize, e = i != x.lastwindowheight && Math.abs(i - x.lastwindowheight) > x.fallbacks.ignoreHeightChangesSize) : e = i != x.lastwindowheight
					}(t.outerWidth(!0) != x.width || t.is(":hidden") || e) && (x.lastwindowheight = jQuery(window).height(), containerResized(t, x))
				}), hideSliderUnder(t, x), contWidthManager(x), x.fallbacks.disableFocusListener || "true" == x.fallbacks.disableFocusListener || !0 === x.fallbacks.disableFocusListener || (t.addClass("rev_redraw_on_blurfocus"), tabBlurringCheck())
			}
		},
		cArray = function (e, i) {
			if (!jQuery.isArray(e)) {
				var t = e;
				(e = new Array).push(t)
			}
			if (e.length < i) {
				t = e[e.length - 1];
				for (var a = 0; a < i - e.length + 2; a++) e.push(t)
			}
			return e
		},
		checkHoverDependencies = function (e, n) {
			var i = e.data();
			("sliderenter" === i.start || i.frames !== undefined && i.frames[0] != undefined && "sliderenter" === i.frames[0].delay) && (n.layersonhover === undefined && (n.c.on("tp-mouseenter", function () {
				n.layersonhover && jQuery.each(n.layersonhover, function (e, i) {
					var t = i.data("closestli") || i.closest(".tp-revslider-slidesli"),
						a = i.data("staticli") || i.closest(".tp-static-layers");
					i.data("closestli") === undefined && (i.data("closestli", t), i.data("staticli", a)), (0 < t.length && t.hasClass("active-revslide") || t.hasClass("processing-revslide") || 0 < a.length) && (i.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({
						caption: i,
						opt: n,
						frame: "frame_0",
						triggerdirection: "in",
						triggerframein: "frame_0",
						triggerframeout: "frame_999"
					}), i.data("triggerstate", "on"))
				})
			}), n.c.on("tp-mouseleft", function () {
				n.layersonhover && jQuery.each(n.layersonhover, function (e, i) {
					i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, n), _R.playAnimationFrame && _R.playAnimationFrame({
						caption: i,
						opt: n,
						frame: "frame_999",
						triggerdirection: "out",
						triggerframein: "frame_0",
						triggerframeout: "frame_999"
					})
				})
			}), n.layersonhover = new Array), n.layersonhover.push(e))
		},
		contWidthManager = function (e) {
			var i = _R.getHorizontalOffset(e.c, "left");
			if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, {
				left: 0,
				width: e.c.width()
			}) : punchgs.TweenLite.set(e.ul, {
				left: i,
				width: e.c.width() - _R.getHorizontalOffset(e.c, "both")
			});
			else {
				var t = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i);
				punchgs.TweenLite.set(e.c.parent(), {
					left: 0 - t + "px",
					width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both")
				})
			}
			e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, {
				left: i
			})
		},
		cv = function (e, i) {
			return e === undefined ? i : e
		},
		hideSliderUnder = function (e, i, t) {
			var a = e.parent();
			jQuery(window).width() < i.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
				display: "none"
			})) : e.is(":hidden") && t && (a.data("olddisplay") != undefined && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({
				display: a.data("olddisplay")
			}) : a.css({
				display: "block"
			}), e.trigger("restarttimer"), setTimeout(function () {
				containerResized(e, i)
			}, 150)), _R.hideUnHideNav && _R.hideUnHideNav(i)
		},
		containerResized = function (e, i) {
			if (e.trigger("revolution.slide.beforeredraw"), 1 == i.infullscreenmode && (i.minHeight = jQuery(window).height()), setCurWinRange(i), setCurWinRange(i, !0), !_R.resizeThumbsTabs || !0 === _R.resizeThumbsTabs(i)) {
				if (hideSliderUnder(e, i, !0), contWidthManager(i), "carousel" == i.sliderType && _R.prepareCarousel(i, !0), e === undefined) return !1;
				_R.setSize(i), i.conw = i.c.width(), i.conh = i.infullscreenmode ? i.minHeight : i.c.height();
				var t = e.find(".active-revslide .slotholder"),
					a = e.find(".processing-revslide .slotholder");
				removeSlots(e, i, e, 2), "standard" === i.sliderType && (punchgs.TweenLite.set(a.find(".defaultimg"), {
					opacity: 0
				}), t.find(".defaultimg").css({
					opacity: 1
				})), "carousel" === i.sliderType && i.lastconw != i.conw && (clearTimeout(i.pcartimer), i.pcartimer = setTimeout(function () {
					_R.prepareCarousel(i, !0), "carousel" == i.sliderType && "on" === i.carousel.showLayersAllTime && jQuery.each(i.li, function (e) {
						_R.animateTheCaptions({
							slide: jQuery(i.li[e]),
							opt: i,
							recall: !0
						})
					})
				}, 100), i.lastconw = i.conw), _R.manageNavigation && _R.manageNavigation(i), _R.animateTheCaptions && 0 < e.find(".active-revslide").length && _R.animateTheCaptions({
					slide: e.find(".active-revslide"),
					opt: i,
					recall: !0
				}), "on" == a.data("kenburns") && _R.startKenBurn(a, i, a.data("kbtl") !== undefined ? a.data("kbtl").progress() : 0), "on" == t.data("kenburns") && _R.startKenBurn(t, i, t.data("kbtl") !== undefined ? t.data("kbtl").progress() : 0), _R.animateTheCaptions && 0 < e.find(".processing-revslide").length && _R.animateTheCaptions({
					slide: e.find(".processing-revslide"),
					opt: i,
					recall: !0
				}), _R.manageNavigation && _R.manageNavigation(i)
			}
			e.trigger("revolution.slide.afterdraw")
		},
		setScale = function (e) {
			e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (1 < e.bh || 1 < e.bw) && (e.bw = 1, e.bh = 1)
		},
		prepareSlides = function (e, u) {
			if (e.find(".tp-caption").each(function () {
					var e = jQuery(this);
					e.data("transition") !== undefined && e.addClass(e.data("transition"))
				}), u.ul.css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: e.parent().css("maxHeight")
				}), "on" == u.autoHeight && (u.ul.css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: "none"
				}), e.css({
					maxHeight: "none"
				}), e.parent().css({
					maxHeight: "none"
				})), u.allli.each(function (e) {
					var i = jQuery(this),
						t = i.data("originalindex");
					(u.startWithSlide != undefined && t == u.startWithSlide || u.startWithSlide === undefined && 0 == e) && i.addClass("next-revslide"), i.css({
						width: "100%",
						height: "100%",
						overflow: "hidden"
					})
				}), "carousel" === u.sliderType) {
				u.ul.css({
					overflow: "visible"
				}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
				var i = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
				u.c.parent().prepend(i), u.c.parent().append(i), _R.prepareCarousel(u)
			}
			e.parent().css({
				overflow: "visible"
			}), u.allli.find(">img").each(function (e) {
				var i = jQuery(this),
					t = i.closest("li"),
					a = t.find(".rs-background-video-layer");
				a.addClass("defaultvid").css({
					zIndex: 30
				}), i.addClass("defaultimg"), "on" == u.fallbacks.panZoomDisableOnMobile && _ISM && (i.data("kenburns", "off"), i.data("bgfit", "cover"));
				var n = t.data("mediafilter");
				n = "none" === n || n === undefined ? "" : n, i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), a.appendTo(t.find(".slotholder"));
				var r = i.data();
				i.closest(".slotholder").data(r), 0 < a.length && r.bgparallax != undefined && (a.data("bgparallax", r.bgparallax), a.data("showcoveronpause", "on")), "none" != u.dottedOverlay && u.dottedOverlay != undefined && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + u.dottedOverlay + '"></div>');
				var o = i.attr("src");
				r.src = o, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
				i.closest(".slotholder");
				var s = i.data("bgcolor"),
					l = "";
				l = s !== undefined && 0 <= s.indexOf("gradient") ? '"background:' + s + ';width:100%;height:100%;"' : '"background-color:' + s + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + o + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"', i.data("mediafilter", n), n = "on" === i.data("kenburns") ? "" : n;
				var d = jQuery('<div class="tp-bgimg defaultimg ' + n + '" data-bgcolor="' + s + '" style=' + l + "></div>");
				i.parent().append(d);
				var c = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
				i.replaceWith(c), d.data(r), d.attr("src", o), "standard" !== u.sliderType && "undefined" !== u.sliderType || d.css({
					opacity: 0
				})
			}), u.scrolleffect.on && "on" === u.scrolleffect.on_slidebg && (u.allslotholder = new Array, u.allli.find(".slotholder").each(function () {
				jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')
			}), u.allslotholder = u.c.find(".slotholder_fadeoutwrap"))
		},
		removeSlots = function (e, i, t, a) {
			i.removePrepare = i.removePrepare + a, t.find(".slot, .slot-circle-wrapper").each(function () {
				jQuery(this).remove()
			}), i.transition = 0, i.removePrepare = 0
		},
		cutParams = function (e) {
			var i = e;
			return e != undefined && 0 < e.length && (i = e.split("?")[0]), i
		},
		relativeRedir = function (e) {
			return location.pathname.replace(/(.*)\/[^/]*/, "$1/" + e)
		},
		abstorel = function (e, i) {
			var t = e.split("/"),
				a = i.split("/");
			t.pop();
			for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? t.pop() : t.push(a[n]));
			return t.join("/")
		},
		imgLoaded = function (l, e, d) {
			e.syncload--, e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
				var t = i.src.replace(/\.\.\/\.\.\//gi, ""),
					a = self.location.href,
					n = document.location.origin,
					r = a.substring(0, a.length - 1) + "/" + t,
					o = n + "/" + t,
					s = abstorel(self.location.href, i.src);
				a = a.substring(0, a.length - 1) + t, (cutParams(n += t) === cutParams(decodeURIComponent(l.src)) || cutParams(a) === cutParams(decodeURIComponent(l.src)) || cutParams(s) === cutParams(decodeURIComponent(l.src)) || cutParams(o) === cutParams(decodeURIComponent(l.src)) || cutParams(r) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(l.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(l.src).match(new RegExp(t))) && (i.progress = d, i.width = l.width, i.height = l.height)
			}), progressImageLoad(e)
		},
		progressImageLoad = function (a) {
			3 != a.syncload && a.loadqueue && jQuery.each(a.loadqueue, function (e, i) {
				if (i.progress.match(/prepared/g) && a.syncload <= 3) {
					if (a.syncload++, "img" == i.type) {
						var t = new Image;
						t.onload = function () {
							imgLoaded(this, a, "loaded"), i.error = !1
						}, t.onerror = function () {
							imgLoaded(this, a, "failed"), i.error = !0
						}, t.src = i.src
					} else jQuery.get(i.src, function (e) {
						i.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), i.progress = "loaded", a.syncload--, progressImageLoad(a)
					}).fail(function () {
						i.progress = "failed", a.syncload--, progressImageLoad(a)
					});
					i.progress = "inload"
				}
			})
		},
		addToLoadQueue = function (t, e, i, a, n) {
			var r = !1;
			if (e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
					i.src === t && (r = !0)
				}), !r) {
				var o = new Object;
				o.src = t, o.starttoload = jQuery.now(), o.type = a || "img", o.prio = i, o.progress = "prepared", o.static = n, e.loadqueue.push(o)
			}
		},
		loadImages = function (e, a, n, r) {
			e.find("img,.defaultimg, .tp-svg-layer").each(function () {
				var e = jQuery(this),
					i = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
					t = e.data("svg_src") != undefined ? "svg" : "img";
				e.data("start-to-load", jQuery.now()), addToLoadQueue(i, a, n, t, r)
			}), progressImageLoad(a)
		},
		getLoadObj = function (e, t) {
			var a = new Object;
			return e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
				i.src == t && (a = i)
			}), a
		},
		waitForCurrentImages = function (o, s, e) {
			var l = !1;
			o.find("img,.defaultimg, .tp-svg-layer").each(function () {
				var e = jQuery(this),
					i = e.data("lazyload") != undefined ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
					t = getLoadObj(s, i);
				if (e.data("loaded") === undefined && t !== undefined && t.progress && t.progress.match(/loaded/g)) {
					if (e.attr("src", t.src), "img" == t.type)
						if (e.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", t.src) : -1 == t.src.indexOf("images/transparent.png") && -1 == t.src.indexOf("assets/transparent.png") || e.data("bgcolor") === undefined ? e.css({
							backgroundImage: 'url("' + t.src + '")'
						}) : e.data("bgcolor") !== undefined && e.css({
							background: e.data("bgcolor")
						}), o.data("owidth", t.width), o.data("oheight", t.height), o.find(".slotholder").data("owidth", t.width), o.find(".slotholder").data("oheight", t.height);
						else {
							var a = e.data("ww"),
								n = e.data("hh");
							e.data("owidth", t.width), e.data("oheight", t.height), a = a == undefined || "auto" == a || "" == a ? t.width : a, n = n == undefined || "auto" == n || "" == n ? t.height : n, !jQuery.isNumeric(a) && 0 < a.indexOf("%") && (n = a), e.data("ww", a), e.data("hh", n)
						}
					else "svg" == t.type && "loaded" == t.progress && (e.append('<div class="tp-svg-innercontainer"></div>'), e.find(".tp-svg-innercontainer").append(t.innerHTML));
					e.data("loaded", !0)
				}
				if (t && t.progress && t.progress.match(/inprogress|inload|prepared/g) && (!t.error && jQuery.now() - e.data("start-to-load") < 5e3 ? l = !0 : (t.progress = "failed", t.reported_img || (t.reported_img = !0, console.warn(i + "  Could not be loaded !")))), 1 == s.youtubeapineeded && (!window.YT || YT.Player == undefined) && (l = !0, 5e3 < jQuery.now() - s.youtubestarttime && 1 != s.youtubewarning)) {
					s.youtubewarning = !0;
					var r = "YouTube Api Could not be loaded !";
					"https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
				}
				if (1 == s.vimeoapineeded && !window.Vimeo && (l = !0, 5e3 < jQuery.now() - s.vimeostarttime && 1 != s.vimeowarning)) {
					s.vimeowarning = !0;
					r = "Vimeo Api Could not be loaded !";
					"https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
				}
			}), !_ISM && s.audioqueue && 0 < s.audioqueue.length && jQuery.each(s.audioqueue, function (e, i) {
				i.status && "prepared" === i.status && jQuery.now() - i.start < i.waittime && (l = !0)
			}), jQuery.each(s.loadqueue, function (e, i) {
				!0 !== i.static || "loaded" == i.progress && "failed" !== i.progress || ("failed" == i.progress ? i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded in time. Error Exists:" + i.error)) : !i.error && jQuery.now() - i.starttoload < 5e3 ? l = !0 : i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded within 5s! Error Exists:" + i.error)))
			}), l ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [o, s, e]) : punchgs.TweenLite.delayedCall(.18, e)
		},
		swapSlide = function (e) {
			var i = e[0].opt;
			if (clearTimeout(i.waitWithSwapSlide), 0 < e.find(".processing-revslide").length) return i.waitWithSwapSlide = setTimeout(function () {
				swapSlide(e)
			}, 150), !1;
			var t = e.find(".active-revslide"),
				a = e.find(".next-revslide"),
				n = a.find(".defaultimg");
			if ("carousel" !== i.sliderType || i.carousel.fadein || (punchgs.TweenLite.to(i.ul, 1, {
					opacity: 1
				}), i.carousel.fadein = !0), a.index() === t.index() && !0 !== i.onlyPreparedSlide) return a.removeClass("next-revslide"), !1;
			!0 === i.onlyPreparedSlide && (i.onlyPreparedSlide = !1, jQuery(i.li[0]).addClass("processing-revslide")), a.removeClass("next-revslide").addClass("processing-revslide"), -1 === a.index() && "carousel" === i.sliderType && (a = jQuery(i.li[0])), a.data("slide_on_focus_amount", a.data("slide_on_focus_amount") + 1 || 1), "on" == i.stopLoop && a.index() == i.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
				visibility: "hidden"
			}), e.trigger("revolution.slide.onstop"), i.noloopanymore = 1), a.index() === i.slideamount - 1 && (i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), i.tonpause = !0, e.trigger("stoptimer"), i.cd = 0, "off" === i.spinner && (i.loader !== undefined ? i.loader.css({
				display: "none"
			}) : i.loadertimer = setTimeout(function () {
				i.loader !== undefined && i.loader.css({
					display: "block"
				})
			}, 50)), loadImages(a, i, 1), _R.preLoadAudio && _R.preLoadAudio(a, i, 1), waitForCurrentImages(a, i, function () {
				a.find(".rs-background-video-layer").each(function () {
					var e = jQuery(this);
					e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, i)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>')
				}), swapSlideProgress(n, e)
			})
		},
		swapSlideProgress = function (e, i) {
			var t = i.find(".active-revslide"),
				a = i.find(".processing-revslide"),
				n = t.find(".slotholder"),
				r = a.find(".slotholder"),
				o = i[0].opt;
			o.tonpause = !1, o.cd = 0, clearTimeout(o.loadertimer), o.loader !== undefined && o.loader.css({
				display: "none"
			}), _R.setSize(o), _R.slotSize(e, o), _R.manageNavigation && _R.manageNavigation(o);
			var s = {};
			s.nextslide = a, s.currentslide = t, i.trigger("revolution.slide.onbeforeswap", s), o.transition = 1, o.videoplaying = !1, a.data("delay") != undefined ? (o.cd = 0, o.delay = a.data("delay")) : o.delay = o.origcd, "true" == a.data("ssop") || !0 === a.data("ssop") ? o.ssop = !0 : o.ssop = !1, i.trigger("nulltimer");
			var l = t.index(),
				d = a.index();
			o.sdir = d < l ? 1 : 0, "arrow" == o.sc_indicator && (0 == l && d == o.slideamount - 1 && (o.sdir = 1), l == o.slideamount - 1 && 0 == d && (o.sdir = 0)), o.lsdir = o.lsdir === undefined ? o.sdir : o.lsdir, o.dirc = o.lsdir != o.sdir, o.lsdir = o.sdir, t.index() != a.index() && 1 != o.firststart && _R.removeTheCaptions && _R.removeTheCaptions(t, o), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? o.videoplaying = !0 : i.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
			var c;
			if (o.currentSlide = t.index(), o.nextSlide = a.index(), "carousel" == o.sliderType) c = new punchgs.TimelineLite, _R.prepareCarousel(o, c), letItFree(i, r, n, a, t, c), o.transition = 0, o.firststart = 0;
			else {
				(c = new punchgs.TimelineLite({
					onComplete: function () {
						letItFree(i, r, n, a, t, c)
					}
				})).add(punchgs.TweenLite.set(r.find(".defaultimg"), {
					opacity: 0
				})), c.pause(), _R.animateTheCaptions && _R.animateTheCaptions({
					slide: a,
					opt: o,
					preset: !0
				}), 1 == o.firststart && (punchgs.TweenLite.set(t, {
					autoAlpha: 0
				}), o.firststart = 0), punchgs.TweenLite.set(t, {
					zIndex: 18
				}), punchgs.TweenLite.set(a, {
					autoAlpha: 0,
					zIndex: 20
				}), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != undefined && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == undefined && a.data("transition", "random"), 0;
				var u = a.data("transition") !== undefined ? a.data("transition").split(",") : "fade",
					p = a.data("nexttransid") == undefined ? -1 : a.data("nexttransid");
				"on" == a.data("randomtransition") ? p = Math.round(Math.random() * u.length) : p += 1, p == u.length && (p = 0), a.data("nexttransid", p);
				var f = u[p];
				o.ie && ("boxfade" == f && (f = "boxslide"), "slotfade-vertical" == f && (f = "slotzoom-vertical"), "slotfade-horizontal" == f && (f = "slotzoom-horizontal")), _R.isIE(8) && (f = 11), c = _R.animateSlide(0, f, i, a, t, r, n, c), "on" == r.data("kenburns") && (_R.startKenBurn(r, o), c.add(punchgs.TweenLite.set(r, {
					autoAlpha: 0
				}))), c.pause()
			}
			_R.scrollHandling && (_R.scrollHandling(o, !0, 0), c.eventCallback("onUpdate", function () {
				_R.scrollHandling(o, !0, 0)
			})), "off" != o.parallax.type && o.parallax.firstgo == undefined && _R.scrollHandling && (o.parallax.firstgo = !0, o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0), setTimeout(function () {
				o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
			}, 210), setTimeout(function () {
				o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
			}, 420)), _R.animateTheCaptions ? "carousel" === o.sliderType && "on" === o.carousel.showLayersAllTime ? (jQuery.each(o.li, function (e) {
				o.carousel.allLayersStarted ? _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					opt: o,
					recall: !0
				}) : o.li[e] === a ? _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					maintimeline: c,
					opt: o,
					startslideanimat: 0
				}) : _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					opt: o,
					startslideanimat: 0
				})
			}), o.carousel.allLayersStarted = !0) : _R.animateTheCaptions({
				slide: a,
				opt: o,
				maintimeline: c,
				startslideanimat: 0
			}) : c != undefined && setTimeout(function () {
				c.resume()
			}, 30), punchgs.TweenLite.to(a, .001, {
				autoAlpha: 1
			})
		},
		letItFree = function (e, i, t, a, n, r) {
			var o = e[0].opt;
			"carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
				zIndex: 20,
				autoAlpha: 1,
				onComplete: function () {
					removeSlots(e, o, a, 1)
				}
			}), a.index() != n.index() && punchgs.TweenLite.to(n, .2, {
				zIndex: 18,
				autoAlpha: 0,
				onComplete: function () {
					removeSlots(e, o, n, 1)
				}
			})), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = a.index(), o.c.attr("data-slideactive", e.find(".active-revslide").data("index")), "scroll" != o.parallax.type && "scroll+mouse" != o.parallax.type && "mouse+scroll" != o.parallax.type || (o.lastscrolltop = -999, _R.scrollHandling(o)), r.clear(), t.data("kbtl") != undefined && (t.data("kbtl").reverse(), t.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, o)), a.find(".rs-background-video-layer").each(function (e) {
				if (_ISM && !o.fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
				var i = jQuery(this);
				_R.resetVideo(i, o, !1, !0), punchgs.TweenLite.fromTo(i, 1, {
					autoAlpha: 0
				}, {
					autoAlpha: 1,
					ease: punchgs.Power3.easeInOut,
					delay: .2,
					onComplete: function () {
						_R.animcompleted && _R.animcompleted(i, o)
					}
				})
			}), n.find(".rs-background-video-layer").each(function (e) {
				if (_ISM) return !1;
				var i = jQuery(this);
				_R.stopVideo && (_R.resetVideo(i, o), _R.stopVideo(i, o)), punchgs.TweenLite.to(i, 1, {
					autoAlpha: 0,
					ease: punchgs.Power3.easeInOut,
					delay: .2
				})
			});
			var s = {};
			if (s.slideIndex = a.index() + 1, s.slideLIIndex = a.index(), s.slide = a, s.currentslide = a, s.prevslide = n, o.last_shown_slide = n.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), o.startWithSlide !== undefined && "done" !== o.startWithSlide && "carousel" === o.sliderType) {
				for (var l = o.startWithSlide, d = 0; d <= o.li.length - 1; d++) {
					jQuery(o.li[d]).data("originalindex") === o.startWithSlide && (l = d)
				}
				0 !== l && _R.callingNewSlide(o.c, l), o.startWithSlide = "done"
			}
			o.duringslidechange = !1;
			var c = n.data("slide_on_focus_amount"),
				u = n.data("hideafterloop");
			0 != u && u <= c && o.c.revremoveslide(n.index());
			var p = -1 === o.nextSlide || o.nextSlide === undefined ? 0 : o.nextSlide;
			o.rowzones != undefined && (p = p > o.rowzones.length ? o.rowzones.length : p), o.rowzones != undefined && 0 < o.rowzones.length && o.rowzones[p] != undefined && 0 <= p && p <= o.rowzones.length && 0 < o.rowzones[p].length && _R.setSize(o)
		},
		removeAllListeners = function (e, i) {
			e.children().each(function () {
				try {
					jQuery(this).die("click")
				} catch (e) {}
				try {
					jQuery(this).die("mouseenter")
				} catch (e) {}
				try {
					jQuery(this).die("mouseleave")
				} catch (e) {}
				try {
					jQuery(this).unbind("hover")
				} catch (e) {}
			});
			try {
				e.die("click", "mouseenter", "mouseleave")
			} catch (e) {}
			clearInterval(i.cdint), e = null
		},
		countDown = function (e, i) {
			i.cd = 0, i.loop = 0, i.stopAfterLoops != undefined && -1 < i.stopAfterLoops ? i.looptogo = i.stopAfterLoops : i.looptogo = 9999999, i.stopAtSlide != undefined && -1 < i.stopAtSlide ? i.lastslidetoshow = i.stopAtSlide : i.lastslidetoshow = 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on");
			var t = e.find(".tp-bannertimer");
			e.on("stoptimer", function () {
				var e = jQuery(this).find(".tp-bannertimer");
				e[0].tween.pause(), "on" == i.disableProgressBar && e.css({
					visibility: "hidden"
				}), i.sliderstatus = "paused", _R.unToggleState(i.slidertoggledby)
			}), e.on("starttimer", function () {
				i.forcepause_viatoggle || (1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.tonpause && 1 != i.overnav && 1 != i.ssop && (1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || (t.css({
					visibility: "visible"
				}), t[0].tween.resume(), i.sliderstatus = "playing")), "on" == i.disableProgressBar && t.css({
					visibility: "hidden"
				}), _R.toggleState(i.slidertoggledby))
			}), e.on("restarttimer", function () {
				if (!i.forcepause_viatoggle) {
					var e = jQuery(this).find(".tp-bannertimer");
					if (i.mouseoncontainer && "on" == i.navigation.onHoverStop && !_ISM) return !1;
					1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || 1 == i.ssop || (e.css({
						visibility: "visible"
					}), e[0].tween.kill(), e[0].tween = punchgs.TweenLite.fromTo(e, i.delay / 1e3, {
						width: "0%"
					}, {
						force3D: "auto",
						width: "100%",
						ease: punchgs.Linear.easeNone,
						onComplete: a,
						delay: 1
					}), i.sliderstatus = "playing"), "on" == i.disableProgressBar && e.css({
						visibility: "hidden"
					}), _R.toggleState(i.slidertoggledby)
				}
			}), e.on("nulltimer", function () {
				t[0].tween.kill(), t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
					width: "0%"
				}, {
					force3D: "auto",
					width: "100%",
					ease: punchgs.Linear.easeNone,
					onComplete: a,
					delay: 1
				}), t[0].tween.pause(0), "on" == i.disableProgressBar && t.css({
					visibility: "hidden"
				}), i.sliderstatus = "paused"
			});
			var a = function () {
				0 == jQuery("body").find(e).length && (removeAllListeners(e, i), clearInterval(i.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (i.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(e, 1)
			};
			t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
				width: "0%"
			}, {
				force3D: "auto",
				width: "100%",
				ease: punchgs.Linear.easeNone,
				onComplete: a,
				delay: 1
			}), 1 < i.slideamount && (0 != i.stopAfterLoops || 1 != i.stopAtSlide) ? e.trigger("starttimer") : (i.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function () {
				i.mouseoncontainer = !0, "on" != i.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause"))
			}), e.on("tp-mouseleft", function () {
				i.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == i.navigation.onHoverStop && (1 == i.viewPort.enable && i.inviewport || 0 == i.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer"))
			})
		},
		vis = function () {
			var i, t, e = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			for (i in e)
				if (i in document) {
					t = e[i];
					break
				} return function (e) {
				return e && document.addEventListener(t, e, {
					pasive: !0
				}), !document[i]
			}
		}(),
		restartOnFocus = function () {
			jQuery(".rev_redraw_on_blurfocus").each(function () {
				var e = jQuery(this)[0].opt;
				if (e == undefined || e.c == undefined || 0 === e.c.length) return !1;
				1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function () {
					"on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
				}))
			})
		},
		lastStatBlur = function () {
			jQuery(".rev_redraw_on_blurfocus").each(function () {
				var e = jQuery(this)[0].opt;
				e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
				var i = e.c.find(".active-revslide .slotholder"),
					t = e.c.find(".processing-revslide .slotholder");
				"on" == t.data("kenburns") && _R.stopKenBurn(t, e), "on" == i.data("kenburns") && _R.stopKenBurn(i, e)
			})
		},
		tabBlurringCheck = function () {
			var e = document.documentMode === undefined,
				i = window.chrome;
			1 !== jQuery("body").data("revslider_focus_blur_listener") && (jQuery("body").data("revslider_focus_blur_listener", 1), e && !i ? jQuery(window).on("focusin", function () {
				restartOnFocus()
			}).on("focusout", function () {
				lastStatBlur()
			}) : window.addEventListener ? (window.addEventListener("focus", function (e) {
				restartOnFocus()
			}, {
				capture: !1,
				passive: !0
			}), window.addEventListener("blur", function (e) {
				lastStatBlur()
			}, {
				capture: !1,
				passive: !0
			})) : (window.attachEvent("focus", function (e) {
				restartOnFocus()
			}), window.attachEvent("blur", function (e) {
				lastStatBlur()
			})))
		},
		getUrlVars = function (e) {
			for (var i, t = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), i = a[n].split("="), t.push(i[0]), t[i[0]] = i[1];
			return t
		}
}(jQuery);
jQuery(function (e) {
	if ("undefined" == typeof wc_add_to_cart_params) return !1;
	var t = function () {
		e(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
	};
	t.prototype.onAddToCart = function (t) {
		var a = e(this);
		if (a.is(".ajax_add_to_cart")) {
			if (!a.attr("data-product_id")) return !0;
			t.preventDefault(), a.removeClass("added"), a.addClass("loading");
			var o = {};
			e.each(a.data(), function (t, a) {
				o[t] = a
			}), e(document.body).trigger("adding_to_cart", [a, o]), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), o, function (t) {
				t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? e(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
			})
		}
	}, t.prototype.onRemoveFromCart = function (t) {
		var a = e(this),
			o = a.closest(".woocommerce-mini-cart-item");
		t.preventDefault(), o.block({
			message: null,
			overlayCSS: {
				opacity: .6
			}
		}), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
			cart_item_key: a.data("cart_item_key")
		}, function (t) {
			t && t.fragments ? e(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash]) : window.location = a.attr("href")
		}).fail(function () {
			window.location = a.attr("href")
		})
	}, t.prototype.updateButton = function (t, a, o, r) {
		(r = void 0 !== r && r) && (r.removeClass("loading"), r.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== r.parent().find(".added_to_cart").length || r.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e(document.body).trigger("wc_cart_button_updated", [r]))
	}, t.prototype.updateCartPage = function () {
		var t = window.location.toString().replace("add-to-cart", "added-to-cart");
		e(".shop_table.cart").load(t + " .shop_table.cart:eq(0) > *", function () {
			e(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_page_refreshed")
		}), e(".cart_totals").load(t + " .cart_totals:eq(0) > *", function () {
			e(".cart_totals").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_totals_refreshed")
		})
	}, t.prototype.updateFragments = function (t, a) {
		a && (e.each(a, function (t) {
			e(t).addClass("updating").fadeTo("400", "0.6").block({
				message: null,
				overlayCSS: {
					opacity: .6
				}
			})
		}), e.each(a, function (t, a) {
			e(t).replaceWith(a), e(t).stop(!0).css("opacity", "1").unblock()
		}), e(document.body).trigger("wc_fragments_loaded"))
	}, new t
});
window.jQuery(document).ready(function ($) {
	$('body').on('adding_to_cart', function (event, $button, data) {
		$button && $button.hasClass('vc_gitem-link') && $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
	}).on('added_to_cart', function (event, fragments, cart_hash, $button) {
		if ('undefined' === typeof ($button)) {
			$button = $('.vc-gitem-add-to-cart-loading-btn');
		}
		$button && $button.hasClass('vc_gitem-link') && $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
	});
});
var runPYS = function () {
	var $ = window.jQuery;
	if (pys_fb_pixel_options.run === true) {
		return;
	} else {
		pys_fb_pixel_options.run = true;
	}! function (f, b, e, v, n, t, s) {
		if (f.fbq) return;
		n = f.fbq = function () {
			n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
		};
		if (!f._fbq) f._fbq = n;
		n.push = n;
		n.loaded = !0;
		n.version = '2.0';
		n.agent = 'dvpixelyoursite';
		n.queue = [];
		t = b.createElement(e);
		t.async = !0;
		t.src = v;
		s = b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t, s)
	}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
	if (pys_fb_pixel_options.woo.addtocart_enabled) {
		window.pys_woo_product_data = window.pys_woo_product_data || [];
		$('.add_to_cart_button:not(.product_type_variable)').click(function (e) {
			var product_id = $(this).data('product_id');
			if (typeof product_id !== 'undefined') {
				if (typeof pys_woo_product_data[product_id] !== 'undefined') {
					fbq('track', 'AddToCart', pys_woo_product_data[product_id]);
				}
			}
		});
		$('.single_add_to_cart_button').click(function (e) {
			var $button = $(this),
				$form = $button.closest('form'),
				is_variable = false,
				qty, product_id = pys_fb_pixel_options.woo.product_id;
			if ($button.hasClass('disabled')) {
				return;
			}
			if ($form.length === 0) {
				return;
			}
			if ($form.hasClass('variations_form')) {
				is_variable = true;
			}
			if (is_variable) {
				qty = parseInt($form.find('input[name="quantity"]').val());
				if (pys_fb_pixel_options.woo.product_data !== 'main') {
					product_id = parseInt($form.find('input[name="variation_id"]').val());
				}
			} else {
				qty = parseInt($form.find('input[name="quantity"]').val());
			}
			if (typeof pys_woo_product_data[product_id] !== 'undefined') {
				var params = pys_woo_product_data[product_id];
				if (pys_fb_pixel_options.woo.product_value_enabled && pys_fb_pixel_options.woo.product_value_option !== 'global') {
					params.value = params.value * qty;
				}
				params.contents[0].quantity = qty;
				fbq('track', 'AddToCart', params);
			}
		});
	}
	regularEvents();
	customCodeEvents();
	$('.edd-add-to-cart').click(function () {
		try {
			var classes = $.grep(this.className.split(" "), function (element, index) {
				return element.indexOf('pys-event-id-') === 0;
			});
			if (typeof classes == 'undefined' || classes.length == 0) {
				return;
			}
			var regexp = /pys-event-id-(.*)/;
			var event_id = regexp.exec(classes[0]);
			if (event_id == null) {
				return;
			}
			evaluateEventByID(event_id[1], pys_edd_ajax_events);
		} catch (e) {
			console.log(e);
		}
	});

	function regularEvents() {
		if (typeof pys_events == 'undefined') {
			return;
		}
		for (var i = 0; i < pys_events.length; i++) {
			var eventData = pys_events[i];
			if (eventData.hasOwnProperty('delay') == false || eventData.delay == 0) {
				fbq(eventData.type, eventData.name, eventData.params);
			} else {
				setTimeout(function (type, name, params) {
					fbq(type, name, params);
				}, eventData.delay * 1000, eventData.type, eventData.name, eventData.params);
			}
		}
	}

	function customCodeEvents() {
		if (typeof pys_customEvents == 'undefined') {
			return;
		}
		$.each(pys_customEvents, function (index, code) {
			eval(code);
		});
	}

	function evaluateEventByID(eventID, events) {
		if (typeof events == 'undefined' || events.length == 0) {
			return;
		}
		if (events.hasOwnProperty(eventID) == false) {
			return;
		}
		var eventData = events[eventID];
		if (eventData.hasOwnProperty('custom')) {
			eval(eventData.custom);
		} else {
			fbq(eventData.type, eventData.name, eventData.params);
		}
	}
};
jQuery(document).ready(function ($) {
	if (typeof pys_fb_pixel_options !== 'undefined') {
		if (!pys_fb_pixel_options.gdpr.disable) {
			var getCookie = function (name) {
				var value = "; " + document.cookie;
				var parts = value.split("; " + name + "=");
				if (parts.length === 2) return parts.pop().split(";").shift();
			};
			if (pys_fb_pixel_options.gdpr.ginger_enabled) {
				var ginger_cookie = getCookie('ginger-cookie');
				if (pys_fb_pixel_options.gdpr.enable_before_consent) {
					if (typeof ginger_cookie === 'undefined' || ginger_cookie === 'Y') {
						runPYS();
					} else {
						console.warn('PixelYourSite is disabled by Ginger - EU Cookie Law plugin.');
					}
				} else {
					if (ginger_cookie === 'Y') {
						runPYS();
					} else {
						console.warn('PixelYourSite is disabled by Ginger - EU Cookie Law plugin.');
					}
				}
			} else if (pys_fb_pixel_options.gdpr.cookiebot_enabled && typeof Cookiebot !== 'undefined') {
				if (pys_fb_pixel_options.gdpr.enable_before_consent) {
					if (Cookiebot.consented === false || Cookiebot.consent.marketing) {
						runPYS();
					} else {
						console.warn('PixelYourSite is disabled by Cookiebot plugin.');
					}
				} else {
					if (Cookiebot.consent.marketing) {
						runPYS();
					} else {
						console.warn('PixelYourSite is disabled by Cookiebot plugin.');
					}
				}
				Cookiebot.onaccept = function () {
					if (Cookiebot.consent.marketing) {
						runPYS();
					}
				}
			} else {
				runPYS();
			}
		} else {
			console.warn('PixelYourSite is disabled by GDPR.');
		}
	}
});
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	function b(b, d) {
		var e, f, g, h = b.nodeName.toLowerCase();
		return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
	}

	function c(b) {
		return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
			return "hidden" === a.css(this, "visibility")
		}).length
	}
	a.ui = a.ui || {}, a.extend(a.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), a.fn.extend({
		scrollParent: function (b) {
			var c = this.css("position"),
				d = "absolute" === c,
				e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				f = this.parents().filter(function () {
					var b = a(this);
					return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
				}).eq(0);
			return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
		},
		uniqueId: function () {
			var a = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++a)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
			})
		}
	}), a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
			return function (c) {
				return !!a.data(c, b)
			}
		}) : function (b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function (c) {
			return b(c, !isNaN(a.attr(c, "tabindex")))
		},
		tabbable: function (c) {
			var d = a.attr(c, "tabindex"),
				e = isNaN(d);
			return (e || d >= 0) && b(c, !e)
		}
	}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
		function d(b, c, d, f) {
			return a.each(e, function () {
				c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			}), c
		}
		var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
			f = c.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + c] = function (b) {
			return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
				a(this).css(f, d(this, b) + "px")
			})
		}, a.fn["outer" + c] = function (b, e) {
			return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
				a(this).css(f, d(this, b, !0, e) + "px")
			})
		}
	}), a.fn.addBack || (a.fn.addBack = function (a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
		return function (c) {
			return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
		}
	}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
		focus: function (b) {
			return function (c, d) {
				return "number" == typeof c ? this.each(function () {
					var b = this;
					setTimeout(function () {
						a(b).focus(), d && d.call(b)
					}, c)
				}) : b.apply(this, arguments)
			}
		}(a.fn.focus),
		disableSelection: function () {
			var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(a + ".ui-disableSelection", function (a) {
					a.preventDefault()
				})
			}
		}(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function (b) {
			if (void 0 !== b) return this.css("zIndex", b);
			if (this.length)
				for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
					if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
					e = e.parent()
				}
			return 0
		}
	}), a.ui.plugin = {
		add: function (b, c, d) {
			var e, f = a.ui[b].prototype;
			for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
		},
		call: function (a, b, c, d) {
			var e, f = a.plugins[b];
			if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
				for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
		}
	}
});

function countUp(a, b, c, d, e, f) {
	this.options = f || {
		useEasing: !0,
		useGrouping: !0,
		separator: ",",
		decimal: "."
	};
	for (var g = 0, h = ["webkit", "moz", "ms"], i = 0; i < h.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[h[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[h[i] + "CancelAnimationFrame"] || window[h[i] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function (a, b) {
		var c = (new Date).getTime(),
			d = Math.max(0, 16 - (c - g)),
			e = window.setTimeout(function () {
				a(c + d)
			}, d);
		return g = c + d, e
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
		clearTimeout(a)
	});
	var j = this;
	this.d = "string" == typeof a ? document.getElementById(a) : a, this.startVal = Number(b), this.endVal = Number(c), this.countDown = this.startVal > this.endVal, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, d || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * e || 2e3, this.easeOutExpo = function (a, b, c, d) {
		return c * (-Math.pow(2, -10 * a / d) + 1) * 1024 / 1023 + b
	}, this.count = function (a) {
		null === j.startTime && (j.startTime = a), j.timestamp = a;
		var b = a - j.startTime;
		if (j.remaining = j.duration - b, j.options.useEasing)
			if (j.countDown) {
				var c = j.easeOutExpo(b, 0, j.startVal - j.endVal, j.duration);
				j.frameVal = j.startVal - c
			} else j.frameVal = j.easeOutExpo(b, j.startVal, j.endVal - j.startVal, j.duration);
		else if (j.countDown) {
			var c = (j.startVal - j.endVal) * (b / j.duration);
			j.frameVal = j.startVal - c
		} else j.frameVal = j.startVal + (j.endVal - j.startVal) * (b / j.duration);
		j.frameVal = Math.round(j.frameVal * j.dec) / j.dec, j.countDown ? j.frameVal = j.frameVal < j.endVal ? j.endVal : j.frameVal : j.frameVal = j.frameVal > j.endVal ? j.endVal : j.frameVal, j.d.innerHTML = j.formatNumber(j.frameVal.toFixed(j.decimals)), b < j.duration ? j.rAF = requestAnimationFrame(j.count) : null != j.callback && j.callback()
	}, this.start = function (a) {
		return j.callback = a, isNaN(j.endVal) || isNaN(j.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), j.d.innerHTML = "--") : j.rAF = requestAnimationFrame(j.count), !1
	}, this.stop = function () {
		cancelAnimationFrame(j.rAF)
	}, this.reset = function () {
		j.startTime = null, cancelAnimationFrame(j.rAF), j.d.innerHTML = j.formatNumber(j.startVal.toFixed(j.decimals))
	}, this.resume = function () {
		j.startTime = null, j.duration = j.remaining, j.startVal = j.frameVal, requestAnimationFrame(j.count)
	}, this.formatNumber = function (a) {
		a += "";
		var b, c, d, e;
		if (b = a.split("."), c = b[0], d = b.length > 1 ? j.options.decimal + b[1] : "", e = /(\d+)(\d{3})/, j.options.useGrouping)
			for (; e.test(c);) c = c.replace(e, "$1" + j.options.separator + "$2");
		return c + d
	}, j.d.innerHTML = j.formatNumber(j.startVal.toFixed(j.decimals))
}

function ult_creative_link_ht() {
	jQuery(".ult_cl_link_9").each(function (a) {
		var b = jQuery(this).find(".ult_colorlink").outerHeight(),
			b = parseInt(b / 2);
		jQuery(this).find(".ult_btn9_link_top").css({
			"-webkit-transform": "translateY(-" + b + "px)",
			"-ms-transform": "translateY(-" + b + "px)",
			"-moz-transform": "translateY(-" + b + "px)",
			transform: "translateY(-" + b + "px)"
		}), jQuery(this).find(".ult_btn9_link_btm").css({
			"-webkit-transform": "translateY(" + b + "px)",
			"-moz-transform": "translateY(" + b + "px)",
			"-ms-transform": "translateY(" + b + "px)",
			transform: "translateY(" + b + "px)"
		})
	})
}

function recallme() {
	jQuery(".ult_dual_button").each(function (a) {
		var b = jQuery(this).attr("id"),
			c = jQuery(this).data("response");
		if ("undefined" != c && "" != c || (c = "on"), "on" == c) {
			var d = b;
			d = document.createElement("style"), d.type = "text/css", d.innerHTML = "@media(min-width:300px) and (max-width:768px) {#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: 0px;float: none;position: relative}.ult_main_dualbtn { display: inline-block}.ult_dualbutton-wrapper { display: block }#" + b + ".ult_dual_button .middle-text {top: 100%;right: 50%}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit; border-bottom: 0px!important;}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;border-top-right-radius: 0!important}}@media(min-width:0px) and (max-width:0px) {#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { float: left; position: relative}.ult_dual1 {     border-right: none!important } .ult_dualbutton-wrapper {display: block}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important;  border-bottom-right-radius: 0!important}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;  border-bottom-left-radius: 0!important  }}@media(min-width:768px) and (max-width:970px) { #" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: -4px; float: none; position: relative }.ult_dualbutton-wrapper { display: block} #" + b + ".ult_dual_button .middle-text { top: 100%; right: 50% }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button {     border-top-left-radius: 0!important;   border-top-right-radius: 0!important  }}@media(min-width:970px){ #" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important}#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#" + b + ".ult_dual_button .ult_dual1 { border-right: none!important}}", document.getElementsByTagName("head")[0].appendChild(d), document.getElementsByTagName("head")[0].appendChild(d);
			var e = jQuery(window).width(),
				f = jQuery(this).find(".ult_dual1").outerWidth(),
				g = jQuery(this).find(".ult_dual2").outerWidth();
			if (e > 300 && e <= 768) var h = "inset 0px -" + f + "px 0px 0px ",
				i = " inset 0px " + g + "px 0px 0px ";
			else if (e > 768 && e < 1015) var h = "inset 0px -" + f + "px 0px 0px ",
				i = " inset 0px " + g + "px 0px 0px ";
			else var h = "inset -" + f + "px 0 0 0 ",
				i = "inset " + g + "px 0 0 0";
			jQuery("#" + b).find(".ult_dual1").mouseenter(function () {
				var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");
					jQuery(this).css({
						"box-shadow": h + c
					})
				}
			}), jQuery("#" + b).find(".ult_dual1").mouseleave(function () {
				var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-1").data("bgcolor");
					jQuery(this).css({
						"box-shadow": "inset 0px 0 0 0 " + c
					})
				}
			}), jQuery("#" + b).find(".ult_dual2").mouseenter(function () {
				var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");
					jQuery(this).css({
						"box-shadow": i + c
					})
				}
			}), jQuery("#" + b).find(".ult_dual2").mouseleave(function () {
				var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-2").data("bgcolor");
					jQuery(this).css({
						"box-shadow": "inset 0px 0 0 0 " + c
					})
				}
			})
		} else {
			var d = b;
			d = document.createElement("style"), d.type = "text/css", d.innerHTML = "#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important }#" + b + ".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#" + b + ".ult_dual_button .ult_dual1 { border-right: none!important}", document.getElementsByTagName("head")[0].appendChild(d), document.getElementsByTagName("head")[0].appendChild(d), jQuery("#" + b).find(".ult_dual1").mouseenter(function () {
				var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2],
					c = jQuery(this).outerWidth();
				if ("Style2" == a) {
					var d = "inset -" + c + "px 0 0 0 ",
						e = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");
					jQuery(this).css({
						"box-shadow": d + e
					})
				}
			}), jQuery("#" + b).find(".ult_dual1").mouseleave(function () {
				var a = jQuery(this).find(".ult-dual-btn-1").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-1").data("bgcolor");
					jQuery(this).css({
						"box-shadow": "inset 0px 0 0 0 " + c
					})
				}
			}), jQuery("#" + b).find(".ult_dual2").mouseenter(function () {
				var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2],
					c = jQuery(this).outerWidth();
				if ("Style2" == a) {
					var d = "inset " + c + "px 0 0 0",
						e = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");
					jQuery(this).css({
						"box-shadow": d + e
					})
				}
			}), jQuery("#" + b).find(".ult_dual2").mouseleave(function () {
				var a = jQuery(this).find(".ult-dual-btn-2").attr("class"),
					b = a.split(" "),
					a = b[1] + b[2];
				if ("Style2" == a) {
					var c = jQuery(this).find(".ult-dual-btn-2").data("bgcolor");
					jQuery(this).css({
						"box-shadow": "inset 0px 0 0 0 " + c
					})
				}
			})
		}
	})
}

function info_box_set_auto_height() {
	jQuery(".aio-icon-box.square_box-icon").each(function (a, b) {
		var c = jQuery(window).width() || "";
		if ("" != c)
			if (c >= 768) {
				var d = jQuery(this).attr("data-min-height") || "";
				"" != d && jQuery(this).css("min-height", d)
			} else jQuery(this).css("min-height", "initial")
	})
}

function calculate_clipped_circle() {
	jQuery(".clipped-info-circle").each(function () {
		var a = jQuery(this).data("circle-type"),
			b = jQuery(this).data("half-percentage"),
			c = jQuery(this).children().data("responsive-circle");
		if ("on" == c) {
			var d = jQuery(this).children().data("responsive-breakpoint"),
				e = jQuery(window).width(),
				a = jQuery(this).data("circle-type");
			if (e > d) {
				var f = jQuery(this).data("first-height");
				"undefined" != typeof f && "" != f && jQuery(this).height(f), jQuery(this).width("100%"), make_info_circle(".info-c-full-br", resizedd)
			}
		}
		var g = jQuery(this).find(".info-circle-icons").outerHeight(),
			h = jQuery(this).find(".info-circle-icons").outerHeight();
		if ("full-circle" != a) {
			var i = jQuery(this).outerHeight(),
				j = (jQuery(this).outerWidth(), jQuery(this).css("margin-top")),
				k = jQuery(this).css("margin-bottom"),
				l = jQuery(this).children().outerWidth(),
				m = parseInt(jQuery(this).find(".info-c-full").css("margin-top").replace(/[^-\d\.]/g, "")),
				n = parseInt(jQuery(this).find(".info-c-full").css("padding-top").replace(/[^-\d\.]/g, ""));
			if ("top-circle" == a || "bottom-circle" == a) {
				jQuery(this).css({
					overflow: "hidden"
				});
				var o = (jQuery(this).find(".info-c-full").outerWidth(), jQuery(this).find(".info-c-full").width());
				if ("top-circle" == a) {
					var p = b / 100 * i;
					jQuery(this).css({
						"padding-top": j,
						height: p,
						"margin-bottom": 0
					});
					var q = p - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n - n / 2;
					jQuery(this).find(".info-c-full-wrap").css({
						height: q
					})
				} else if ("bottom-circle" == a) {
					var r = (100 - b) / 100 * i,
						p = i - r + 10;
					jQuery(this).css({
						"padding-bottom": k,
						height: p,
						"margin-top": 0
					}), jQuery(this).children().css({
						"margin-top": -(r + g / 2)
					});
					var q = p - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n - n / 2;
					jQuery(this).find(".info-c-full-wrap").height(q);
					var s = o - q;
					jQuery(this).find(".info-c-full-wrap").css({
						"margin-top": s + "px"
					})
				}
			} else if ("left-circle" == a || "right-circle" == a) {
				jQuery(this).css({
					overflow: "hidden",
					"padding-top": j,
					"padding-bottom": k
				});
				var o = (jQuery(this).find(".info-c-full").outerWidth(), jQuery(this).find(".info-c-full").width());
				if ("left-circle" == a) {
					var t = b / 100 * l;
					jQuery(this).css({
						width: t,
						"padding-left": j
					}), jQuery(this).children().css({
						width: l,
						"max-width": l
					});
					var u = t - m - (n + n / 2) - parseInt(j.replace(/[^-\d\.]/g, ""));
					jQuery(this).find(".info-c-full-wrap").width(u)
				} else if ("right-circle" == a) {
					var v = (100 - b) / 100 * l,
						t = parseInt(l - v);
					jQuery(this).css({
						width: t,
						"padding-right": j
					}), jQuery(this).children().css({
						"margin-left": -(v + h / 2),
						"max-width": l,
						width: l
					});
					var w = v - m;
					w = w + parseInt(j.replace(/[^-\d\.]/g, "")) - n;
					var u = t - m - parseInt(j.replace(/[^-\d\.]/g, "")) - n,
						x = w;
					jQuery(this).find(".info-c-full-wrap").width(u), jQuery(this).find(".info-c-full-wrap").css({
						"margin-left": x + "px"
					})
				}
			}
		}
		if ("on" == c) {
			var d = jQuery(this).children().data("responsive-breakpoint"),
				e = jQuery(window).width();
			e <= d && jQuery(this).css({
				width: "auto",
				overflow: "visible",
				height: "auto",
				padding: 0
			})
		}
	})
}

function info_circle_slide(a, b) {
	b.bsf_appear(function () {
		setInterval(function () {
			if ("on" == b.attr("data-slide-true")) {
				var a = 1 * b.attr("data-slide-number"),
					c = b.find(".info-circle-icons").length;
				"full" != b.data("info-circle-angle") ? c - 1 == a && (a = 0) : c == a && (a = 0);
				var d = b.find(".info-circle-icons").eq(a);
				b.attr("data-slide-number", a + 1), show_next_info_circle(d)
			}
		}, a)
	})
}

function show_next_info_circle(a) {
	var b = a.parents(".info-c-full-br").data("highlight-style");
	"" != b && (a.parents(".info-c-full-br").find("." + b).removeClass(b).removeClass("info-cirlce-active"), a.addClass(b).addClass("info-cirlce-active"));
	var c = a.next(),
		d = a.parents(".info-c-full-br").data("icon-show-size");
	"not-show" == a.parents(".info-c-full-br").data("icon-show") && (c.find("i").remove(), c.find("img").remove(), a.parents(".info-c-full-br").find(".info-c-full").addClass("cirlce-noicon")), c = c.html();
	var e = (a.css("font-size"), a.attr("style"), a.parents(".info-c-full-br"));
	e.find(".info-c-full-wrap").stop().animate({
		opacity: 0
	}, "slow", function () {
		a.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(c), e.find(".info-c-full i").css({
			"font-size": parseInt(d) + "px"
		}), e.find(".info-c-full img").css({
			width: parseInt(d) + "px"
		}), a.parents(".info-c-full-br").find(".info-c-full-wrap").animate({
			opacity: 1
		}, "slow")
	})
}

function responsive_check(a) {
	jQuery(a).each(function () {
		if ("on" == jQuery(this).data("responsive-circle")) {
			var a = jQuery(this).parent(),
				b = a.data("uniqid"),
				c = jQuery(this).data("responsive-breakpoint"),
				d = "info-circle-wrapper-" + b,
				e = "<style>@media(max-width:" + c + "px){ #" + d + " .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #" + d + " .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";
			jQuery("head").append(e);
			var f = jQuery(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),
				g = f.find(".icon_list_item").clone();
			f.find(".icon_list_item").remove();
			var h = jQuery(this).next().data("content_bg"),
				i = jQuery(this).next().data("content_color");
			jQuery(this).find(".icon-circle-list .info-details").each(function () {
				var a = jQuery(this).attr("data-icon-class"),
					b = jQuery(this).find(".info-circle-heading").html(),
					c = jQuery(this).find(".info-circle-text").html(),
					d = jQuery(this).prev().css("background-color"),
					e = jQuery(this).prev().css("color"),
					j = jQuery(this).prev().css("border"),
					k = jQuery(this).find(".info-circle-sub-def").children().eq(0).clone();
				g.find(".icon_list_icon").html(k.wrap("<div />").parent().html()), g.find(".icon_description").css("color", i), g.find(".icon_description").css("background-color", h), g.find(".icon_description h3").html(b), g.find(".icon_description p").html(c), g.find(".icon_list_icon").css({
					"background-color": d,
					color: e,
					border: j
				}), g.addClass(a), f.append(g.wrap("<div />").parent().html())
			})
		}
	})
}

function make_info_circle(a, b) {
	jQuery(a).each(function (a, b) {
		var c = jQuery(b).data("icon-size");
		jQuery(jQuery(b).find(".icon-circle-list .info-circle-icons")).each(function (a, d) {
			var e, f, g, h, i = !!jQuery(d).hasClass("info-circle-icon-without-background");
			i ? (e = f = h = c, g = c / 2) : (e = f = h = 2 * c, g = c), jQuery(b).parent().css({
				"margin-top": g + 10 + "px",
				"margin-bottom": g + 10 + "px"
			}), jQuery(b).find(".icon-circle-list .info-circle-icons").css({
				"font-size": c + "px",
				height: e + "px",
				width: f + "px",
				margin: "-" + (g + "px"),
				"line-height": h + "px"
			})
		})
	}), ".info-c-full-br" == a && jQuery(a).each(function () {
		jQuery(this).css("height", jQuery(this).width()), jQuery(this).css("opacity", "1")
	}), ".info-c-semi-br" == a && jQuery(a).each(function () {
		var a = jQuery(this).width();
		jQuery(this).css("height", parseInt(a) / 2 + "px");
		var a = a + "px " + a + "px  0 0";
		jQuery(this).css("border-radius", a);
		var b = jQuery(this).find(".info-c-full").width();
		b = b + "px " + b + "px 0 0", jQuery(this).find(".info-c-full").css("border-radius", b)
	}), setTimeout(function () {
		b == resizedd && (".info-c-full-br" == a && part_circle_icon(a), ".info-c-semi-br" == a && semi_circle_icon(a))
	}, 1e3)
}

function part_circle_icon(a) {
	jQuery(a).each(function () {
		jQuery(this).bsf_appear(function () {
			if ("none" != jQuery(this).css("display")) {
				var a = jQuery(this).find(".icon-circle-list .info-circle-icons").length,
					b = new Array,
					c = jQuery(this).outerWidth() / 2,
					d = 0,
					e = jQuery(this).data("start-degree");
				"undefined" == typeof e && "" == e || (d = e);
				var f = 180 / a,
					g = jQuery(this).data("info-circle-angle"),
					h = jQuery(this).data("divert"),
					i = "";
				"full" == g && (i = g, g = 180, f = 90, c = -c);
				var j = 0,
					k = !1;
				for (m = 1; m <= a; m++) {
					var l = m * ((180 + 2 * f) / a);
					"full" == i ? (l < d && 1 == m ? (j = d - l, k = !1) : l > d && 1 == m && (j = l - d, k = !0), 1 == k ? l -= j : l += j) : l = l + g - f + h, l = .0174532925 * l, b.push(c * Math.cos(l)), b.push(c * Math.sin(l))
				}
				var m = 0,
					n = 0,
					o = jQuery(this).data("launch"),
					p = jQuery(this).data("launch-duration"),
					q = jQuery(this).data("launch-delay");
				p || (p = 1), q || (q = .15), "" != o ? (n = -(1e3 * q), jQuery(this).find(".icon-circle-list .info-circle-icons").each(function () {
					var a = jQuery(this);
					n += 1e3 * q, setTimeout(function () {
						a.animate({
							opacity: 1,
							left: b[m++],
							top: b[m++]
						}, {
							duration: 1e3 * p,
							easing: o
						})
					}, n)
				})) : jQuery(this).find(".icon-circle-list .info-circle-icons").each(function () {
					var a = jQuery(this);
					a.css({
						opacity: "1",
						left: b[m++],
						top: b[m++]
					})
				})
			}
		})
	})
}

function setmytime() {
	function a() {
		var a = jQuery(window).width();
		jQuery(".ult_tabs").each(function () {
			var b = (jQuery(this).data("tabsstyle"), jQuery(this).data("respmode")),
				d = jQuery(this).data("respwidth"),
				e = jQuery(this).data("responsivemode");
			a >= d ? (jQuery(this).parent().find(".ult_acord").css({
				display: "none"
			}), jQuery(this).parent().find(".ult_tabs").css({
				display: "block"
			}), "Both" != e && (jQuery(this).find(".aio-icon").hasClass("ult_tab_resp_icon") && jQuery(this).find(".aio-icon").removeClass("ult_tab_resp_icon").addClass("icon-top"), jQuery(this).find(".ult_tab_main").hasClass("ult_tab_resp_ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_tab_resp_ult_top").addClass("ult_top"))) : ("Accordion" == b && (jQuery(this).parent().find(".ult_acord").css({
				display: "block"
			}), jQuery(this).parent().find(".ult_tabs").css({
				display: "none"
			})), "Both" != e && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))), a > 300 && a < 660 && (jQuery(this).find(".ult_a ").removeClass("false"), c.push(ht1), "Both" != e && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top")))
		})
	}
	var b = [],
		c = [],
		d = !0,
		e = escape(window.location.hash.substr(1));
	if ("" != e) {
		var f = jQuery("a[href$='" + e + "']");
		if (f.parents(".ult_tabs").length > 0) {
			var g = f.parents(".ult_tabs"),
				h = g.data("activebg"),
				i = g.data("titlebg"),
				j = g.data("titlecolor"),
				k = g.data("activetitle"),
				l = g.data("tabsstyle"),
				m = g.data("activeicon"),
				n = g.find("li.ult_tab_li").data("iconcolor");
			if ("" == m) var m = g.find("li.ult_tab_li").data("iconhover");
			g.find("li.ult_tab_li").removeClass("current"), f.parent().addClass("current"), "style1" == l || "style2" == l ? (g.find("a.ult_a").css({
				"background-color": i
			}), f.css({
				"background-color": h
			})) : (g.find("li.ult_tab_li").css({
				"background-color": i
			}), f.parent().css({
				"background-color": h
			})), g.find("a.ult_a").css({
				color: j
			}), f.css({
				color: k
			}), g.find(".ult_tab_icon").css({
				color: n
			}), f.find(".ult_tab_icon").css({
				color: m
			});
			var o = f.parent().index() + 1;
			g.find(".ult_tabitemname").css({
				display: "none"
			}), g.find(".ult_tabitemname:nth-child(" + o + ")").css({
				display: "block"
			});
			g.offset().top, g.offset().left;
			g.hasClass("ult_aniamte") || jQuery("html, body").animate({
				scrollTop: g.offset().top
			}, 1e3), g.addClass("ult_aniamte"), g.find("ul.ult_tabmenu li a.ult_a").click(function (a) {
				a.preventDefault(), jQuery("html,body").clearQueue(), jQuery("html,body").stop()
			})
		}
	}
	jQuery(".ult_tabs").each(function () {
		var a = jQuery(this).data("fullheight"),
			e = 0;
		"on" == a && jQuery(this).find(".ult_tabitemname").each(function () {
			e < jQuery(this).outerHeight() && (e = jQuery(this).outerHeight(), jQuery(this).parents(".ult_tabcontent").css({
				"min-height": e + "px"
			}))
		});
		var f = jQuery(this).data("tabsstyle"),
			g = jQuery(window).width(),
			h = jQuery(this).data("respmode"),
			i = jQuery(this).data("respwidth"),
			j = jQuery(this).data("responsivemode"),
			k = jQuery(this).closest(".ult_tabs").data("animation");
		if ("Fade" == k || "Scale" == k || "Slide-Zoom" == k) {
			var l = jQuery(this).find("div.ult_tabcontent").outerHeight();
			jQuery(this).find(".ult_tabcontent").css({
				height: l
			})
		}
		if ("Slide-Horizontal" == k) {
			var g = jQuery(this).find("div.ult_tabcontent").outerWidth();
			jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("ult_active_tabnme")
		}
		"Scale" == k && (jQuery(this).find(".ult_tabitemname").not("div.ult_tabitemname:eq(0)").addClass("scaleTabname"), jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("scaleTabname2")), "Slide-Zoom" == k && (jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"), jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in")), g >= i ? (jQuery(this).parent().find(".ult_acord").css({
			display: "none"
		}), jQuery(this).parent().find(".ult_tabs").css({
			display: "block"
		})) : "Accordion" == h && (jQuery(this).parent().find(".ult_acord").css({
			display: "block"
		}), jQuery(this).parent().find(".ult_tabs").css({
			display: "none"
		})), jQuery(this).find(".ult_tabmenu").hasClass("Style_4");
		var m = 0;
		d = "false", jQuery(this).find(".ult_tab_li").each(function () {
			m < jQuery(this).outerHeight() && (m = jQuery(this).outerHeight())
		}), jQuery(this).find(".ult_a").addClass(d), ht1 = parseInt(m), "style2" == f ? (ht1 = parseInt(ht1 / 2), g > 300 && g < 660 && (ht1 = m / 2)) : "style1" == f && jQuery(this).find(".ult_tabmenu").hasClass("Style_5"), g > 300 && g < 660 && (jQuery(this).find(".ult_a ").removeClass("false"), c.push(ht1), "Both" != j && (jQuery(this).find(".aio-icon").hasClass("icon-top") && jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"), jQuery(this).find(".ult_tab_main").hasClass("ult_top") && jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))), jQuery(this).find(".ult_a ").hasClass("false") && b.push(ht1)
	}), jQuery(window).resize(function (b) {
		a()
	})
}! function (a) {
	jQuery(document).ready(function () {
		function b() {
			return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && void jQuery(".enable-on-viewport").each(function (a, b) {
				var c = jQuery(this).isVdoOnScreen();
				jQuery(this).hasClass("hosted-video") && !jQuery(this).hasClass("override-controls") && (c ? (jQuery(this)[0].play(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "play"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this)[0].pause(), jQuery(this).parent().parent().parent().find(".video-controls").attr("data-action", "pause"), jQuery(this).parent().parent().parent().find(".video-controls").html('<i class="ult-vid-cntrlplay"></i>')))
			})
		}

		function c(a) {
			var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			a = a.replace(b, function (a, b, c, d) {
				return b + b + c + c + d + d
			});
			var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
			return c ? {
				r: parseInt(c[1], 16),
				g: parseInt(c[2], 16),
				b: parseInt(c[3], 16)
			} : null
		}

		function d(b, d) {
			var e = b.data("seperator"),
				f = b.data("seperator-type"),
				g = b.data("seperator-shape-size"),
				h = b.data("seperator-background-color"),
				i = b.data("seperator-border"),
				j = b.data("seperator-border-color"),
				k = b.data("seperator-border-width"),
				l = b.data("seperator-svg-height"),
				m = b.data("seperator-full-width"),
				n = b.data("seperator-position");
			"undefined" != typeof n && "" != n || (n = "top_seperator");
			var o = b.data("icon");
			o = "undefined" == typeof o ? "" : '<div class="separator-icon">' + o + "</div>";
			var p = seperator_class = seperator_border_css = seperator_border_line_css = seperator_css = "";
			if ("undefined" != typeof e && "true" == e.toString()) {
				var q = shape_css = svg = inner_html = seperator_css = shape_css = "",
					r = !1,
					s = Math.floor(9999999999999 * Math.random()),
					t = "uvc-seperator-" + s;
				"undefined" != typeof g && "" != g && "undefined" != g || (g = 0), g = parseInt(g);
				var u = g / 2,
					v = 0;
				if ("triangle_seperator" == f) seperator_class = "ult-trinalge-seperator";
				else if ("circle_seperator" == f) seperator_class = "ult-circle-seperator";
				else if ("diagonal_seperator" == f) seperator_class = "ult-double-diagonal";
				else if ("triangle_svg_seperator" == f) seperator_class = "ult-svg-triangle", svg = '<svg class="uvc-svg-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 0.156661 0.1"><polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "/></svg>', r = !0;
				else if ("circle_svg_seperator" == f) seperator_class = "ult-svg-circle", svg = '<svg class="uvc-svg-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 0.2 0.1"><path d="M0.200004 0c-3.93701e-006,0.0552205 -0.0447795,0.1 -0.100004,0.1 -0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1l0.200004 0z"/></svg>', r = !0;
				else if ("xlarge_triangle_seperator" == f) seperator_class = "ult-xlarge-triangle", svg = '<svg class="uvc-x-large-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-0 0.333331l4.66666 0 0 -3.93701e-006 -2.33333 0 -2.33333 0 0 3.93701e-006zm0 -0.333331l4.66666 0 0 0.166661 -4.66666 0 0 -0.166661zm4.66666 0.332618l0 -0.165953 -4.66666 0 0 0.165953 1.16162 -0.0826181 1.17171 -0.0833228 1.17171 0.0833228 1.16162 0.0826181z"/></svg>', r = !0;
				else if ("xlarge_triangle_left_seperator" == f) seperator_class = "ult-xlarge-triangle-left", svg = '<svg class="uvc-x-large-triangle-left" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', r = !0;
				else if ("xlarge_triangle_right_seperator" == f) seperator_class = "ult-xlarge-triangle-right", svg = '<svg class="uvc-x-large-triangle-right" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>', r = !0;
				else if ("xlarge_circle_seperator" == f) seperator_class = "ult-xlarge-circle", svg = '<svg class="uvc-x-large-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil1" d="M4.66666 0l0 7.87402e-006 -3.93701e-006 0c0,0.0920315 -1.04489,0.166665 -2.33333,0.166665 -1.28844,0 -2.33333,-0.0746339 -2.33333,-0.166665l-3.93701e-006 0 0 -7.87402e-006 4.66666 0z"/></svg>', r = !0;
				else if ("curve_up_seperator" == f) seperator_class = "ult-curve-up-seperator", svg = '<svg class="curve-up-inner-seperator uvc-curve-up-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', r = !0;
				else if ("curve_down_seperator" == f) seperator_class = "ult-curve-down-seperator", svg = '<svg class="curve-down-inner-seperator uvc-curve-down-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>', r = !0;
				else if ("tilt_left_seperator" == f) seperator_class = "ult-tilt-left-seperator", svg = '<svg class="uvc-tilt-left-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', r = !0;
				else if ("tilt_right_seperator" == f) seperator_class = "ult-tilt-right-seperator", svg = '<svg class="uvc-tilt-right-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>', r = !0;
				else if ("waves_seperator" == f) seperator_class = "ult-wave-seperator", svg = '<svg class="wave-inner-seperator uvc-wave-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 6 0.1" preserveAspectRatio="none"><path d="M0.199945 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c-0.0541102,0 -0.0981929,-0.0430079 -0.0999409,-0.0967008l0 0.0967008 0.0999409 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm2.00004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm-0.1 0.1l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm1.90004 -0.1c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.199945 0.00329921l0 0.0967008 -0.0999409 0c0.0541102,0 0.0981929,-0.0430079 0.0999409,-0.0967008z"/></svg>',
					r = !0;
				else if ("clouds_seperator" == f) seperator_class = "ult-cloud-seperator", svg = '<svg class="cloud-inner-seperator uvc-cloud-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' + h + '" width="100%" height="' + l + '" viewBox="0 0 2.23333 0.1" preserveAspectRatio="none"><path class="fil0" d="M2.23281 0.0372047c0,0 -0.0261929,-0.000389764 -0.0423307,-0.00584252 0,0 -0.0356181,0.0278268 -0.0865354,0.0212205 0,0 -0.0347835,-0.00524803 -0.0579094,-0.0283701 0,0 -0.0334252,0.0112677 -0.0773425,-0.00116929 0,0 -0.0590787,0.0524724 -0.141472,0.000779528 0,0 -0.0288189,0.0189291 -0.0762362,0.0111535 -0.00458268,0.0141024 -0.0150945,0.040122 -0.0656811,0.0432598 -0.0505866,0.0031378 -0.076126,-0.0226614 -0.0808425,-0.0308228 -0.00806299,0.000854331 -0.0819961,0.0186969 -0.111488,-0.022815 -0.0076378,0.0114843 -0.059185,0.0252598 -0.083563,-0.000385827 -0.0295945,0.0508661 -0.111996,0.0664843 -0.153752,0.019 -0.0179843,0.00227559 -0.0571181,0.00573622 -0.0732795,-0.0152953 -0.027748,0.0419646 -0.110602,0.0366654 -0.138701,0.00688189 0,0 -0.0771732,0.0395709 -0.116598,-0.0147677 0,0 -0.0497598,0.02 -0.0773346,-0.00166929 0,0 -0.0479646,0.0302756 -0.0998937,0.00944094 0,0 -0.0252638,0.0107874 -0.0839488,0.00884646 0,0 -0.046252,0.000775591 -0.0734567,-0.0237087 0,0 -0.046252,0.0101024 -0.0769567,-0.00116929 0,0 -0.0450827,0.0314843 -0.118543,0.0108858 0,0 -0.0715118,0.0609803 -0.144579,0.00423228 0,0 -0.0385787,0.00770079 -0.0646299,0.000102362 0,0 -0.0387559,0.0432205 -0.125039,0.0206811 0,0 -0.0324409,0.0181024 -0.0621457,0.0111063l-3.93701e-005 0.0412205 2.2323 0 0 -0.0627953z"/></svg>', r = !0;
				else if ("multi_triangle_seperator" == f) {
					seperator_class = "ult-multi-trianle";
					var w = c(h);
					svg = '<svg class="uvc-multi-triangle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="' + l + '">\t\t\t\t            <path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .1)"></path>\t\t\t\t            <path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .1)"></path>\t\t\t\t            <path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .3)"></path>\t\t\t\t            <path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .3)"></path>\t\t\t\t            <path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .5)"></path>\t\t\t\t            <path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', .5)"></path>\t\t\t\t            <path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', 1)"></path>\t\t\t\t            <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(' + w.r + "," + w.g + "," + w.b + ', 1)"></path>\t\t\t\t        </svg>', r = !0
				} else if ("round_split_seperator" == f) {
					var x = temp_border_before = temp_border_after = temp_border_line = "";
					temp_padding = 0, seperator_class = "ult-rounded-split-seperator-wrapper";
					jQuery(b).outerHeight();
					if (0 != g) {
						var y = parseInt(jQuery(b).css("padding-bottom"));
						jQuery(b).css({
							"padding-bottom": g + "px"
						}), 0 == y && (temp_padding = g)
					}
					if ("top_seperator" == n) var z = "top-split-seperator",
						A = "0px",
						B = "auto",
						C = "border-radius: 0 0 " + g + "px 0 !important;",
						D = "border-radius: 0 0 0 " + g + "px !important;";
					else if ("bottom_seperator" == n) var z = "bottom-split-seperator",
						A = "auto",
						B = "0px",
						C = "border-radius: 0 " + g + "px 0 0 !important;",
						D = "border-radius: " + g + "px 0 0 0 !important;";
					else var z = "top-bottom-split-seperator",
						E = "0px",
						F = "auto",
						G = "auto",
						H = "0px",
						I = "border-radius: 0 0 " + g + "px 0 !important;",
						J = "border-radius: 0 0 0 " + g + "px !important;",
						K = "border-radius: 0 " + g + "px 0 0 !important;",
						L = "border-radius: " + g + "px 0 0 0 !important;";
					inner_html = '<div class="ult-rounded-split-seperator ' + z + '"></div>', "none" != i && (temp_border_line = k + "px " + i + " " + j, temp_border_before = "border-top: " + temp_border_line + "; border-right: " + temp_border_line + ";", temp_border_after = "border-top: " + temp_border_line + "; border-left: " + temp_border_line + ";"), "top_seperator" == n || "bottom_seperator" == n ? (x = "<style>." + t + " .ult-rounded-split-seperator." + z + ":before { background-color:" + h + "; height:" + g + "px !important; top:" + A + "; bottom:" + B + "; " + temp_border_before + " " + C + " } ." + t + " .ult-rounded-split-seperator." + z + ":after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + A + "; bottom:" + B + "; " + temp_border_after + " " + D + " }</style>", jQuery("head").append(x)) : (x = "<style>." + t + ".top_seperator .ult-rounded-split-seperator:before { background-color:" + h + "; height:" + g + "px !important; top:" + E + "; bottom:" + F + "; " + temp_border_before + " " + I + " } ." + t + ".top_seperator .ult-rounded-split-seperator:after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + E + "; bottom:" + F + "; " + temp_border_after + " " + J + " }</style>", temp_css_bottom = "<style>." + t + ".bottom_seperator .ult-rounded-split-seperator:before { background-color:" + h + "; height:" + g + "px !important; top:" + G + "; bottom:" + H + "; " + temp_border_before + " " + K + " } ." + t + ".bottom_seperator .ult-rounded-split-seperator:after { background-color:" + h + "; left: 50%; height:" + g + "px !important; top:" + G + "; bottom:" + H + "; " + temp_border_after + " " + L + " }</style>", jQuery("head").append(x + temp_css_bottom))
				} else seperator_class = "ult-no-shape-seperator";
				if ("undefined" != typeof k && "" != k && 0 != k && (v = parseInt(k)), shape_css = 'content: "";width:' + g + "px; height:" + g + "px; bottom: -" + (u + v) + "px;", "" != h && (shape_css += "background-color:" + h + ";"), "none" != i && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == r && (seperator_border_line_css = k + "px " + i + " " + j, shape_css += "border-bottom:" + seperator_border_line_css + "; border-right:" + seperator_border_line_css + ";", seperator_css += "border-bottom:" + seperator_border_line_css + ";", p = "bottom:" + k + "px !important"), "ult-no-shape-seperator" != seperator_class && "ult-rounded-split-seperator-wrapper" != seperator_class && 0 == r) {
					var q = "<style>." + t + " .ult-main-seperator-inner:after { " + shape_css + " }</style>";
					jQuery("head").append(q)
				}
				if (1 == r && (inner_html = svg), "top_bottom_seperator" == n) {
					var M = '<div class="ult-vc-seperator top_seperator ' + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>";
					M += '<div class="ult-vc-seperator bottom_seperator ' + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>"
				} else var M = '<div class="ult-vc-seperator ' + n + " " + seperator_class + " " + t + '" data-full-width="' + m + '" data-border="' + i + '" data-border-width="' + k + '"><div class="ult-main-seperator-inner">' + inner_html + "</div>" + o + "</div>";
				if (d.prepend(M), seperator_css = "<style>." + t + " .ult-main-seperator-inner { " + seperator_css + " }</style>", "" != p && (p = "<style>." + t + " .ult-main-seperator-inner { " + p + " }</style>", seperator_css += p), "" != o) {
					var N = l / 2;
					"none_seperator" == f || "circle_svg_seperator" == f || "triangle_svg_seperator" == f ? seperator_css += "<style>." + t + " .separator-icon { -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }</style>" : seperator_css += "<style>." + t + ".top_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% + " + N + "px)); -moz-transform: translate(-50%, calc(-50% + " + N + "px)); -ms-transform: translate(-50%, calc(-50% + " + N + "px)); -o-transform: translate(-50%, calc(-50% + " + N + "px)); transform: translate(-50%, calc(-50% + " + N + "px)); } ." + t + ".bottom_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% - " + N + "px)); -moz-transform: translate(-50%, calc(-50% - " + N + "px)); -ms-transform: translate(-50%, calc(-50% - " + N + "px)); -o-transform: translate(-50%, calc(-50% - " + N + "px)); transform: translate(-50%, calc(-50% - " + N + "px)); }</style>"
				}
				1 == r && (jQuery("." + t).find("svg").css("height", l), setTimeout(function () {
					"multi_triangle_seperator" == f && jQuery(".ult-multi-trianle").each(function (b, c) {
						var d = a(c).find("svg").height();
						a(c).hasClass("top_seperator") || a(c).hasClass("bottom_seperator") && a(c).css("bottom", d - 1)
					})
				}, 300)), jQuery("head").append(seperator_css)
			}
		}

		function e() {
			jQuery(".ult-vc-hide-row").each(function (a, b) {
				var c = jQuery(b).data("hide-row");
				"" != c && jQuery(b).addClass(c)
			})
		}

		function f() {
			jQuery(".ult-vc-seperator").each(function (a, b) {
				var c = jQuery(this).data("full-width"),
					d = jQuery(this).parent().data("rtl");
				"undefined" == typeof d && (d = "false");
				var e = jQuery(this).parent().find(".upb_row_bg").data("bg-override");
				if ("undefined" == typeof e) var e = jQuery(this).parent().find(".upb_video-bg").data("bg-override");
				if (("ex-full" == e || "full" == e || "browser_size" == e) && 1 == c) {
					var f = jQuery("html").width();
					if (jQuery(this).hasClass("ult-rounded-split-seperator-wrapper")) {
						var g = jQuery(this).data("border"),
							h = jQuery(this).data("border-width");
						"undefined" != typeof g && "none" != g && "undefined" != g && (f -= h)
					}
					var i = jQuery(this).offset().left;
					jQuery(this).find(".ult-main-seperator-inner").width(f), "true" == d.toString() ? jQuery(this).find(".ult-main-seperator-inner").css({
						"margin-right": -i + "px"
					}) : jQuery(this).find(".ult-main-seperator-inner").css({
						"margin-left": -i + "px"
					})
				}
			})
		}
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a("html").addClass("ult-remove-fixed-background"), jQuery(window).scroll(function () {
			b()
		}), jQuery(window).load(function () {
			b()
		}), jQuery.fn.isVdoOnScreen = function () {
			var a = jQuery(window),
				b = {
					top: a.scrollTop(),
					left: a.scrollLeft()
				};
			b.right = b.left + a.width(), b.bottom = b.top + a.height() - 200;
			var c = this.parent().offset();
			return c.right = c.left + this.parent().outerWidth(), c.bottom = c.top + this.parent().outerHeight() - 300, !(b.right < c.left || b.left > c.right || b.bottom < c.top || b.top > c.bottom)
		}, jQuery.fn.ultimate_video_bg = function (a) {
			return jQuery(this).each(function () {
				var c = jQuery(this),
					e = c.data("ultimate-video"),
					f = c.data("ultimate-video2"),
					g = c.data("ultimate-video-muted"),
					h = c.data("ultimate-video-loop"),
					i = c.data("ultimate-video-autoplay"),
					j = c.data("ultimate-video-poster"),
					k = c.data("bg-override"),
					l = c.data("start-time"),
					m = c.data("stop-time"),
					n = c.data("upb-bg-animation"),
					o = c.data("overlay"),
					p = c.data("overlay-color"),
					q = c.data("overlay-pattern"),
					r = c.data("overlay-pattern-opacity"),
					s = c.data("overlay-pattern-size"),
					t = c.data("overlay-pattern-attachment"),
					u = c.data("viewport-video"),
					v = c.data("controls"),
					w = c.data("controls-color"),
					x = c.data("fadeout"),
					y = c.data("fadeout-percentage"),
					z = c.data("parallax-content"),
					A = c.data("parallax-content-sense"),
					B = c.data("row-effect-mobile-disable"),
					C = c.data("hide-row"),
					D = c.data("rtl"),
					E = c.data("video_fixer"),
					F = "",
					G = "",
					H = c.data("custom-vc-row"),
					I = c.data("vc"),
					J = c.data("theme-support"),
					K = c.data("is_old_vc");
				"undefined" != typeof H && "" !== H || (H = "wpb_row"), "undefined" == typeof I && (I = 0), "undefined" == typeof K && (K = !1), "undefined" == typeof J && (J = "disable"), c.data("multi-color-overlay") && (F = c.data("multi-color-overlay"), G = c.data("multi-color-overlay-opacity"));
				var L = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
				if ("undefined" != typeof o && "true" === o.toString() && ("" != q && ("" != s && (s = "background-size:" + s + "px;"), "undefined" != typeof t && "" != t && (overlay_pattern_attachment_css = "background-attachment:" + t + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + q + "); opacity:" + r + "; " + s + "; " + overlay_pattern_attachment_css + '"></div>'), "" != p && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + p + ';"></div>'), "" != F && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + F + '" style="opacity:' + G + ';"></div>'), L = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), m = 0 != m ? m : "", 1 == K || "enable" == J)
					if (c.prev().is("p") || c.prev().is("style")) var M = c.prev().prev();
					else var M = c.prev();
				else var M = c.prevAll("." + H + ":first");
				M.css("position", "relative");
				var N = M.attr("class"),
					O = c;
				c = M;
				var P = function () {
					var a, b, d, e = "",
						f = "";
					if (d = c, resize_selector = d.find(".upb_video-bg"), "full" == k && (d = jQuery("body")), "ex-full" == k && (d = jQuery("html")), !isNaN(k))
						for (var g = 0; g < k && "HTML" != d.prop("tagName"); g++) d = d.parent();
					b = resize_selector.parents("upb_video_class").outerHeight(), a = d.outerWidth(), "browser_size" == k && (b = jQuery(window).height(), a = jQuery(window).width(), d.css("min-height", b + "px")), resize_selector.css({
						"min-height": b + "px",
						"min-width": a + "px"
					}), d.offset() && (e = d.offset().left, resize_selector.offset() && (f = resize_selector.offset().left));
					var h, i, j = a,
						l = b,
						m = resize_selector.find(".upb_vimeo_iframe");
					youvideoplayer = resize_selector.find(".upb_utube_iframe"), embeddedvideoplayer = resize_selector.find(".upb_video-src");
					var n = 16 / 9;
					if (m && (j / n < l ? (h = Math.ceil(l * n), m.width(h).height(l).css({
							left: (j - h) / 2,
							top: 0
						})) : (i = Math.ceil(j / n), m.width(j).height(i).css({
							left: 0,
							top: (l - i) / 2
						}))), embeddedvideoplayer) {
						var o = resize_selector.height();
						j / (16 / 9) < o ? (embeddedvideoplayer.css("width", "auto"), embeddedvideoplayer.css("height", "100%")) : (embeddedvideoplayer.css("width", "100%"), embeddedvideoplayer.css("height", "auto"))
					}
				};
				P(), "" != C && (c.addClass("ult-vc-hide-row"), c.attr("data-hide-row", C)), c.attr("data-rtl", D), c.addClass("upb_video_class"), c.attr("data-row-effect-mobile-disable", B), "fadeout_row_value" == x && (c.addClass("vc-row-fade"), c.attr("data-fadeout-percentage", y)), c.attr("data-upb_br_animation", n), e && (e.indexOf("youtube.com") != -1 ? a = "youtube" : e.indexOf("vimeo.com") != -1 && (a = "vimeo"));
				var Q = "";
				if ("display_control" == v) {
					if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var R = "ult-vid-cntrlplay",
						S = "pause";
					else var R = "ult-vid-cntrlpause",
						S = "play";
					Q = '<span class="video-controls" data-action="' + S + '" style="color:' + w + '"><i class="' + R + '"></i></span>'
				}
				if ("browser_size" == k && (c.wrapInner('<div class="upb_video-text-wrapper"><div class="upb_video-text"></div></div>'), c.find(".upb_video-text-wrapper").find(".upb_video-text").addClass(N)), "parallax_content_value" == z) {
					c.addClass("vc-row-translate"), c.attr("data-parallax-content-sense", A), c.wrapInner('<div class="vc-row-translate-wrapper ' + N + '"></div>');
					var T = c.css("padding-top"),
						U = c.css("padding-bottom");
					c.find(".vc-row-translate-wrapper").css({
						"padding-top": T,
						"padding-bottom": U
					}), c[0].style.setProperty("padding-top", "0px", "important"), c[0].style.setProperty("padding-bottom", "0px", "important")
				}
				var V = "";
				if ("true" == E.toString() && (V = "uvc-video-fixer"), "youtube" == a || "vimeo" == a ? c.prepend('<div class="upb_video-wrapper ' + V + '"><div class="upb_video-bg utube" data-rtl="' + D + '" data-bg-override="' + k + '" data-row="' + H + '" data-theme-support="' + J + '">' + L + "</div></div>") : c.prepend(' <div class="upb_video-wrapper"><div class="upb_video-bg" data-bg-override="' + k + '" data-rtl="' + D + '" data-row="' + H + '" data-theme-support="' + J + '"><video class="upb_video-src"></video>' + Q + L + "</div></div>"), d(O, c), O.remove(), "youtube" == a) {
					e = e.substring(e.indexOf("watch?v=") + 8, e.indexOf("watch?v=") + 19);
					var W = c.find(".upb_video-bg");
					"loop" == h && (h = !0), "muted" == g && (g = !0), W.attr("data-vdo", e), W.attr("data-loop", h), W.attr("data-poster", j), W.attr("data-muted", g), W.attr("data-start", l), W.attr("data-stop", m), u === !0 && (W.addClass("enable-on-viewport"), W.addClass("youtube-video"), b())
				} else if ("vimeo" == a) {
					e = e.substring(e.indexOf("vimeo.com/") + 10, e.indexOf("vimeo.com/") + 18);
					var W = c.find(".upb_video-bg");
					W.html('<iframe class="upb_vimeo_iframe" src="http://player.vimeo.com/video/' + e + '?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;loop=0&amp;autoplay=1&amp;api=1&amp;rel=0&amp;" height="1600" width="900" frameborder=""></iframe>')
				} else {
					var W = c.find(".upb_video-src");
					if (hosted_wrapper = W.parent(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "display_control" != v) "display_control" != v && ("" != j && W.parent().find(".video-controls").hide(), W.remove());
					else {
						if (jQuery("<source/>", {
								type: "video/mp4",
								src: e
							}).appendTo(W), "undefined" != typeof f && "" !== f) {
							var X = "";
							f.match(/.ogg/i) ? X = "video/ogg" : f.match(/.webm/i) && (X = "video/webm"), "" != X && jQuery("<source/>", {
								type: X,
								src: f
							}).appendTo(W)
						}
						"muted" == g && W.attr({
							"data-mute": "muted"
						}), "loop" == h && W.attr({
							loop: h
						}), W.attr({
							preload: "auto"
						}), u === !0 ? (W.addClass("enable-on-viewport"), W.addClass("hosted-video"), b()) : "autoplay" == i && W.attr({
							autoplay: i
						})
					}
				}
				"" != j && (console.log(W), W.is(".utube") ? W.css({
					"background-image": "url(" + j + ")"
				}) : hosted_wrapper.css({
					"background-image": "url(" + j + ")"
				})), jQuery(".upb_video-src").each(function (a, b) {
					var c = jQuery(b).attr("data-mute");
					if ("undefined" == typeof c && (c = !1), "muted" === c) {
						var d = jQuery(b)[0];
						d.muted = "muted"
					}
				})
			}), this
		}, jQuery.fn.ultimate_bg_shift = function () {
			return jQuery(this).each(function () {
				var a = jQuery(this),
					b = a.data("ultimate-bg"),
					c = a.data("ultimate-bg-style"),
					e = a.prev().css("background-color"),
					f = a.data("bg-img-repeat"),
					g = a.data("bg-img-size"),
					h = a.data("bg-img-position"),
					i = a.data("parallx_sense"),
					j = a.data("bg-override"),
					k = a.data("bg_img_attach"),
					l = a.data("upb-bg-animation"),
					m = "",
					n = a.data("overlay"),
					m = a.data("overlay-color"),
					o = a.data("overlay-pattern"),
					p = a.data("overlay-pattern-opacity"),
					q = a.data("overlay-pattern-size"),
					r = a.data("overlay-pattern-attachment"),
					s = a.data("fadeout"),
					t = a.data("fadeout-percentage"),
					u = a.data("parallax-content"),
					v = a.data("parallax-content-sense"),
					w = a.data("bg-animation"),
					x = a.data("bg-animation-type"),
					y = a.data("animation-repeat"),
					z = a.data("row-effect-mobile-disable"),
					A = a.data("img-parallax-mobile-disable"),
					B = a.data("hide-row"),
					C = a.data("rtl"),
					D = "",
					E = "",
					F = a.data("custom-vc-row"),
					G = a.data("vc"),
					H = a.data("theme-support"),
					I = a.data("is_old_vc");
				"undefined" != typeof F && "" !== F || (F = "wpb_row"), "undefined" == typeof G && (G = 0), "undefined" == typeof I && (I = !1), "undefined" == typeof H && (H = "disable"), a.data("multi-color-overlay") && (D = a.data("multi-color-overlay"), E = a.data("multi-color-overlay-opacity"));
				var J = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
				if ("undefined" != typeof n && "true" === n.toString() && ("" != o && ("" != q && (q = "background-size:" + q + "px;"), "undefined" != typeof r && "" != r && (overlay_pattern_attachment_css = "background-attachment:" + r + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + o + "); opacity:" + p + "; " + q + "; " + overlay_pattern_attachment_css + '"></div>'), "" != m && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + m + ';"></div>'), "" != D && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + D + '" style="opacity:' + E + ';"></div>'), J = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), 1 == I || "enable" == H)
					if (a.prev().is("p") || a.prev().is("style")) var K = a.prev().prev();
					else var K = a.prev();
				else var K = a.prevAll("." + F + ":first");
				K.css("position", "relative");
				var L = K.attr("class");
				if ("browser_size" == j && (K.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size"), a.parent().find(".upb-background-text-wrapper").find(".upb-background-text").addClass(L)), "parallax_content_value" == u) {
					K.addClass("vc-row-translate"), K.attr("data-parallax-content-sense", v), K.wrapInner('<div class="vc-row-translate-wrapper ' + L + '"></div>');
					var M = K.css("padding-top"),
						N = K.css("padding-bottom");
					K.find(".vc-row-translate-wrapper").css({
						"padding-top": M,
						"padding-bottom": N
					}), K[0].style.setProperty("padding-top", "0px", "important"), K[0].style.setProperty("padding-bottom", "0px", "important")
				}
				"" != B && (K.addClass("ult-vc-hide-row"), K.attr("data-hide-row", B)), K.attr("data-rtl", C), K.prepend('<div class="upb_row_bg">' + J + "</div>"), a.remove(), d(a, K), a = K, a.attr("data-row-effect-mobile-disable", z), a.attr("data-img-parallax-mobile-disable", A), "fadeout_row_value" == s && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", t)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.attr("data-upb_br_animation", l), "automatic" != g ? a.css({
					"background-size": g
				}) : a.addClass("upb_bg_size_automatic"), a.css({
					"background-repeat": f,
					"background-position": h,
					"background-color": e
				}), "vcpb-fs-jquery" == c || "vcpb-mlvp-jquery" == c ? a.attr("data-img-array", b) : a.css({
					"background-image": b,
					"background-attachment": k
				}), a.attr("data-parallax_sense", i), a.attr("data-bg-override", j), a.attr("data-bg-animation", w), a.attr("data-bg-animation-type", x), a.attr("data-animation-repeat", y), a.addClass(c);
				var O = function () {
					var b, c, d, e, f;
					if (d = a.parent(), "full" == j && (d = jQuery("body"), e = 0), "ex-full" == j && (d = jQuery("html"), e = 0), !isNaN(j)) {
						for (var g = 0; g < j && "HTML" != d.prop("tagName"); g++) d = d.parent();
						e = d.offset().left
					}
					if (wh = jQuery(window).height(), c = a.parent().outerHeight(), b = d.outerWidth(), a.css({
							"min-width": b + "px"
						}), f = a.offset().left, a.css({
							left: -Math.abs(e - f) + "px"
						}), "browser_size" == j) {
						var h = a.parent().find(".upb-background-text").height();
						h > wh && (wh = h), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
					}
				};
				O(), jQuery(window).load(function () {
					O()
				}), jQuery(window).resize(function () {
					O()
				})
			}), this
		}, jQuery.fn.ultimate_grad_shift = function () {
			return jQuery(this).each(function () {
				var a = jQuery(this),
					b = a.data("grad"),
					c = (a.data("grad-type"), a.data("grad-custom-degree"), jQuery(this).data("bg-override")),
					e = a.data("overlay"),
					f = a.data("overlay-color"),
					g = a.data("overlay-pattern"),
					h = a.data("overlay-pattern-opacity"),
					i = a.data("overlay-pattern-size"),
					j = a.data("overlay-pattern-attachment"),
					k = a.data("upb-bg-animation"),
					l = a.data("fadeout"),
					m = a.data("fadeout-percentage"),
					n = a.data("parallax-content"),
					o = a.data("parallax-content-sense"),
					p = a.data("row-effect-mobile-disable"),
					q = a.data("hide-row"),
					r = a.data("rtl"),
					s = "",
					t = "",
					u = a.data("custom-vc-row"),
					v = a.data("vc"),
					w = a.data("theme-support"),
					x = a.data("is_old_vc");
				if ("undefined" != typeof u && "" !== u || (u = "wpb_row"), "undefined" == typeof v && (v = 0), "undefined" == typeof x && (x = !1), "undefined" == typeof w && (w = "disable"), a.data("multi-color-overlay") && (s = a.data("multi-color-overlay"), t = a.data("multi-color-overlay-opacity")), 1 == x || "enable" == w)
					if (a.prev().is("p") || a.prev().is("style")) var y = a.prev().prev();
					else var y = a.prev();
				else var y = a.prevAll("." + u + ":first");
				y.css("position", "relative");
				var z = y.attr("class");
				a.remove();
				var A = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
				if ("undefined" != typeof e && "true" === e.toString() && ("" != g && ("" != i && (i = "background-size:" + i + "px;"), "undefined" != typeof j && "" != j && (overlay_pattern_attachment_css = "background-attachment:" + j + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + g + "); opacity:" + h + "; " + i + "; " + overlay_pattern_attachment_css + '"></div>'), "" != f && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + f + ';"></div>'), "" != s && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + s + '" style="opacity:' + t + ';"></div>'), A = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == c && (y.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), y.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(z), y.addClass("full-browser-size")), "parallax_content_value" == n) {
					y.addClass("vc-row-translate"), y.attr("data-parallax-content-sense", o), y.wrapInner('<div class="vc-row-translate-wrapper ' + z + '"></div>');
					var B = y.css("padding-top"),
						C = y.css("padding-bottom");
					y.find(".vc-row-translate-wrapper").css({
						"padding-top": B,
						"padding-bottom": C
					}), y[0].style.setProperty("padding-top", "0px", "important"), y[0].style.setProperty("padding-bottom", "0px", "important")
				}
				"" != q && (y.addClass("ult-vc-hide-row"), y.attr("data-hide-row", q)), y.attr("data-rtl", r), y.prepend('<div class="upb_row_bg">' + A + "</div>"), d(a, y), a = y, a.attr("data-row-effect-mobile-disable", p), "fadeout_row_value" == l && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", m)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.attr("data-upb_br_animation", k), b = b.replace("url(data:image/svg+xml;base64,", "");
				var D = b.indexOf(";");
				b = b.substring(D + 1), a.attr("style", b), a.attr("data-bg-override", c), "browser_size" == c && a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size");
				var E = function () {
					var b, d, e, f, g;
					if (e = a.parent(), "full" == c && (e = jQuery("body"), f = 0), "ex-full" == c && (e = jQuery("html"), f = 0), !isNaN(c)) {
						for (var h = 0; h < c && "HTML" != e.prop("tagName"); h++) e = e.parent();
						f = e.offset().left
					}
					if (wh = jQuery(window).height(), d = a.parent().outerHeight(), b = e.outerWidth(), a.css({
							"min-width": b + "px"
						}), g = a.offset().left, a.css({
							left: -Math.abs(f - g) + "px"
						}), "browser_size" == c) {
						var i = a.parent().find(".upb-background-text").height();
						i > wh && (wh = i), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
					}
				};
				E(), jQuery(window).load(function () {
					E()
				}), jQuery(window).resize(function () {
					E()
				})
			}), this
		}, jQuery.fn.ultimate_bg_color_shift = function () {
			return jQuery(this).each(function () {
				var a = jQuery(this),
					b = jQuery(this).data("bg-override"),
					c = jQuery(this).data("bg-color"),
					e = a.data("fadeout"),
					f = a.data("fadeout-percentage"),
					g = a.data("parallax-content"),
					h = a.data("parallax-content-sense"),
					i = a.data("row-effect-mobile-disable"),
					j = a.data("overlay"),
					k = a.data("overlay-color"),
					l = a.data("overlay-pattern"),
					m = a.data("overlay-pattern-opacity"),
					n = a.data("overlay-pattern-size"),
					o = a.data("overlay-pattern-attachment"),
					p = a.data("hide-row"),
					q = a.data("rtl"),
					r = "",
					s = "",
					t = a.data("vc"),
					u = a.data("theme-support"),
					v = a.data("custom-vc-row"),
					w = a.data("is_old_vc");
				if ("undefined" != typeof v && "" !== v || (v = "wpb_row"), "undefined" == typeof t && (t = 0), "undefined" == typeof w && (w = !1), "undefined" == typeof u && (u = "disable"), a.data("multi-color-overlay") && (r = a.data("multi-color-overlay"), s = a.data("multi-color-overlay-opacity")), 1 == w || "enable" == u)
					if (a.prev().is("p") || a.prev().is("style")) var x = a.prev().prev();
					else var x = a.prev();
				else var x = a.prevAll("." + v + ":first");
				x.css("position", "relative");
				var y = x.attr("class"),
					z = overlay_color_html = overlay_pattern_html = overlay_multi_color_html = overlay_pattern_attachment_css = "";
				if ("undefined" != typeof j && "true" === j.toString() && ("" != l && ("" != n && (n = "background-size:" + n + "px;"), "undefined" != typeof o && "" != o && (overlay_pattern_attachment_css = "background-attachment:" + o + ";"), overlay_pattern_html = '<div class="upb_bg_overlay_pattern" style="background-image:url(' + l + "); opacity:" + m + "; " + n + "; " + overlay_pattern_attachment_css + '"></div>'), "" != k && (overlay_color_html = '<div class="upb_bg_overlay" style="background-color:' + k + ';"></div>'), "" != r && (overlay_multi_color_html = '<div class="upb_bg_overlay ' + r + '" style="opacity:' + s + ';"></div>'), z = overlay_color_html + overlay_pattern_html + overlay_multi_color_html), "browser_size" == b) x.wrapInner('<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'), x.find(".upb-background-text-wrapper").find(".upb-background-text").addClass(y);
				else;
				if ("" != p && (x.addClass("ult-vc-hide-row"), x.attr("data-hide-row", p)), x.attr("data-rtl", q), "parallax_content_value" == g) {
					x.addClass("vc-row-translate"), x.wrapInner('<div class="vc-row-translate-wrapper ' + y + '"></div>'), x.attr("data-parallax-content-sense", h);
					var A = x.css("padding-top"),
						B = x.css("padding-bottom");
					x.find(".vc-row-translate-wrapper").css({
						"padding-top": A,
						"padding-bottom": B
					}), x[0].style.setProperty("padding-top", "0px", "important"), x[0].style.setProperty("padding-bottom", "0px", "important")
				}
				x.prepend('<div class="upb_row_bg">' + z + "</div>"), d(a, x), a.remove(), a = x, a.attr("data-row-effect-mobile-disable", i), "fadeout_row_value" == e && (a.addClass("vc-row-fade"), a.attr("data-fadeout-percentage", f)), a.css("background-image", ""), a = a.find(".upb_row_bg"), a.css({
					background: c
				}), a.attr("data-bg-override", b), "browser_size" == b && a.parent().find(".upb-background-text-wrapper").addClass("full-browser-size");
				var C = function () {
					var c, d, e, f, g;
					if (e = a.parent(), "full" == b && (e = jQuery("body"), f = 0), "ex-full" == b && (e = jQuery("html"), f = 0), !isNaN(b)) {
						for (var h = 0; h < b && "HTML" != e.prop("tagName"); h++) e = e.parent();
						f = e.offset().left
					}
					if (wh = jQuery(window).height(), d = a.parent().outerHeight(), c = e.outerWidth(), a.css({
							"min-width": c + "px"
						}), g = a.offset().left, a.css({
							left: -Math.abs(f - g) + "px"
						}), "browser_size" == b) {
						var i = a.parent().find(".upb-background-text").height();
						i > wh && (wh = i), a.parent().css("height", wh + "px"), a.parent().find(".upb-background-text-wrapper").css("height", wh + "px")
					}
				};
				C(), jQuery(window).load(function () {
					C()
				}), jQuery(window).resize(function () {
					C()
				})
			}), this
		}, jQuery.fn.ultimate_parallax_animation = function (a) {
			function b() {
				var b, g = jQuery(window).scrollTop();
				e.each(function () {
					if ("upb_fade_animation" == jQuery(this).data("upb_br_animation")) {
						b = jQuery(this).offset().top;
						var e = jQuery(this),
							h = e.offset().top,
							i = d(e);
						if (h + i < g || h > g + c - 100) return;
						var j = f - g;
						if (h + i - c < g) {
							var k = j / c;
							if ("parent" == a) {
								var l = parseInt(jQuery(this).css("opacity"));
								l += k / 2.3, jQuery(this).parents(".wpb_row").css({
									opacity: l
								})
							}
							if ("self" == a) {
								var l = parseInt(jQuery(this).css("opacity"));
								l += k / 2.3, jQuery(this).css({
									opacity: l
								})
							}
						}
						f = g
					}
				})
			}
			var c = jQuery(window).height(),
				d = function (a) {
					return a.height()
				},
				e = jQuery(this),
				f = jQuery(window).scrollTop();
			jQuery(window).bind("scroll", b).resize(b), b()
		};
		var g = 0;
		jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift(), jQuery(".upb_no_bg").each(function (a, b) {
			var c = jQuery(b).attr("data-fadeout"),
				d = jQuery(b).data("fadeout-percentage"),
				e = jQuery(b).data("parallax-content"),
				f = jQuery(b).data("parallax-content-sense"),
				g = jQuery(b).data("row-effect-mobile-disable"),
				h = jQuery(b).data("custom-vc-row"),
				i = jQuery(b).data("vc"),
				j = jQuery(b).data("theme-support");
			if ("undefined" != typeof h && "" !== h || (h = "wpb_row"), "undefined" == typeof i && (i = 0), "undefined" == typeof j && (j = "disable"), i = parseFloat(i), i < 4.4 || "enable" == j)
				if (jQuery(b).prev().is("p") || jQuery(b).prev().is("style")) var k = jQuery(b).prev().prev();
				else var k = jQuery(b).prev();
			else var k = jQuery(b).prevAll("." + h + ":first");
			if (k.css("position", "relative"), "undefined" == typeof k[0]) return !1;
			if (k.attr("row-effect-mobile-disable", g), "fadeout_row_value" == c && (k.addClass("vc-row-fade"), k.data("fadeout-percentage", d)), "parallax_content_value" == e) {
				k.addClass("vc-row-translate"), k.attr("data-parallax-content-sense", f), k.wrapInner('<div class="vc-row-translate-wrapper"></div>');
				var l = k.css("padding-top"),
					m = k.css("padding-bottom");
				k.find(".vc-row-translate-wrapper").css({
					"padding-top": l,
					"padding-bottom": m
				}), k[0].style.setProperty("padding-top", "0px", "important"), k[0].style.setProperty("padding-bottom", "0px", "important")
			}
		}), jQuery(".upb_no_bg").remove();
		var h = function () {
			jQuery(".upb_row_bg").each(function () {
				var a, b, c = jQuery(this).data("bg-override"),
					d = jQuery(this).data("theme-support"),
					e = jQuery(this).data("row");
				if (b = "undefined" != typeof d && "enable" !== d ? jQuery(this).parents("." + e + ":first") : jQuery(this).parent(), b.addClass("vc_row-has-fill"), "browser_size" == c && (a = jQuery("html")), "ex-full" == c) a = jQuery("html");
				else if ("full" == c) a = jQuery("body");
				else if (!isNaN(c)) {
					a = b;
					for (var f = 0; f < c && !a.is("html"); f++) a = a.parent()
				}
				var g = parseInt(a.css("paddingLeft")),
					h = parseInt(a.css("paddingRight")),
					i = g + h + a.width(),
					j = -(b.offset().left - a.offset().left);
				if (j > 0 && (left = 0), jQuery(this).css({
						width: i,
						left: j
					}), "browser_size" == c) {
					var k = (a.width(), a.height(), b.width(), b.height()),
						l = b.find(".upb-background-text").height(),
						m = jQuery(window).height();
					if (l > k) var n = l;
					else var n = m;
					b.css("min-height", n + "px"), b.find(".upb-background-text-wrapper").css("min-height", n + "px")
				}
			}), jQuery(".upb_video-bg").each(function (a, b) {
				var c, d, e = jQuery(this).data("bg-override"),
					f = jQuery(this).attr("data-rtl"),
					h = jQuery(this).data("theme-support"),
					i = jQuery(this).data("row");
				if (d = "undefined" != typeof h && "enable" !== h ? jQuery(this).parents("." + i + ":first") : jQuery(this).parent(), "true" == d.attr("data-vc-full-width") || 1 == d.attr("data-vc-full-width") ? d.addClass("uvc-vc-full-width") : d.addClass("uvc-row"), "browser_size" == e) c = jQuery("html"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
				else if ("ex-full" == e) c = jQuery("html"),
					jQuery(this).parents(".upb_video_class").css("overflow", "visible");
				else if ("full" == e) c = jQuery("body"), jQuery(this).parents(".upb_video_class").css("overflow", "visible");
				else if (isNaN(e) || 0 == e) c = d;
				else {
					c = d;
					for (var j = 1; j <= e && !c.is("html"); j++) c = c.parent()
				}
				var k = (parseInt(c.css("paddingLeft")), parseInt(c.css("paddingRight")), parseInt(c.css("marginLeft")), c.outerWidth()),
					l = k,
					m = jQuery(this).offset().left,
					n = jQuery(this).position().left,
					o = c.offset().left,
					p = o - m;
				n < 0 && (p = n + p), 0 == a && (g = n), g > 0 && (p = g), p > 0 && (p = 0), "undefined" == typeof f || f !== !0 && "true" !== f ? jQuery(this).css({
					width: k,
					"min-width": k,
					left: p
				}) : jQuery(this).css({
					width: k,
					"min-width": k,
					right: p
				});
				var q = 16 / 9,
					r = (jQuery(window).width(), jQuery(window).height());
				d.find("video").height();
				if ("browser_size" == e) var s = d.find(".upb_video-text").height();
				else var s = d.height();
				if (k < 960) {
					var t = 16 / 9 * s;
					k = t + k
				}
				pHeight = Math.ceil(k / q), children = jQuery(this).children(), children.removeClass("ult-make-full-height"), s > l && children.addClass("ult-make-full-height");
				var u = jQuery(this).css("background-image");
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) "undefined" != typeof u && "none" != u || (children.css({
					"max-height": "auto",
					height: "auto"
				}), d.css("min-height", "auto"));
				else if ("browser_size" == e) {
					if (s > r) var v = s;
					else var v = r;
					d.addClass("video-browser-size"), d.find(".upb-background-text-wrapper").addClass("full-browser-size"), d.css("min-height", v + "px"), d.find(".upb_video-text-wrapper").length > 0 && (d.find(".upb_video-text-wrapper").addClass("full-browser-size"), d.find(".upb_video-text-wrapper").css("min-height", v + "px"))
				}
			})
		};
		h(), jQuery(window).load(function () {
			h(), f()
		}), jQuery(window).resize(function () {
			h(), f()
		}), jQuery(document).ajaxComplete(function (a, b, c) {
			jQuery(".upb_content_video, .upb_content_iframe").prev().is("p") ? jQuery(".upb_content_video, .upb_content_iframe").prev().prev().css("background-image", "").css("background-repeat", "") : jQuery(".upb_content_video, .upb_content_iframe").prev().css("background-image", "").css("background-repeat", ""), jQuery(".upb_content_video").ultimate_video_bg(), jQuery(".upb_bg_img").ultimate_bg_shift(), jQuery(".upb_content_iframe").ultimate_video_bg(), jQuery(".upb_grad").ultimate_grad_shift(), jQuery(".upb_color").ultimate_bg_color_shift()
		}), jQuery(".video-controls").click(function (a) {
			var b = jQuery(this).attr("data-action"),
				c = jQuery(this).parent().find(".upb_video-src");
			"pause" == b ? (jQuery(this).attr("data-action", "play"), c[0].play(), jQuery(this).html('<i class="ult-vid-cntrlpause"></i>')) : (jQuery(this).attr("data-action", "pause"), c[0].pause(), jQuery(this).html('<i class="ult-vid-cntrlplay"></i>')), c.hasClass("enable-on-viewport") && c.addClass("override-controls")
		}), e(), f(), jQuery(".vcpb-animated").each(function (a, b) {
			var c = jQuery(b).data("animation-repeat");
			jQuery(this).css({
				"background-repeat": c
			});
			var d = jQuery(b).parent().attr("data-img-parallax-mobile-disable");
			if (d = "undefined" == typeof d ? "false" : d.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var e = "true";
			else var e = "false";
			if ("true" == e && "true" == d) var f = "true";
			else var f = "false";
			if ("false" == f) {
				var g = 10;
				"" != jQuery(this).attr("data-parallax_sense") && (g = jQuery(this).attr("data-parallax_sense")), g = 100 - g;
				var h = jQuery(this).attr("data-bg-animation-type"),
					i = jQuery(this).attr("data-bg-animation"),
					j = 0,
					k = h;
				setInterval(function (a) {
					"right-animation" == i || "bottom-animation" == i ? j -= 1 : j += 1, jQuery(b).css("backgroundPosition", "h" == k ? j + "px 0" : "0 " + j + "px")
				}, g)
			}
		})
	})
}(jQuery),
function (a, b, c) {
	function d() {
		a(".ult-content-box").each(function (c, d) {
			var f = a(d).css("background-color") || "",
				i = a(d).data("border_color") || "transparent",
				j = a(d).css("box-shadow") || "",
				k = a(d).data("hover_bg_color") || a(d).css("background-color"),
				l = a(d).data("hover_border_color") || "transparent",
				m = a(d).data("hover_box_shadow") || a(d).css("box-shadow");
			a(d).hover(function () {
				a(d).css("background-color", k), a(d).css("border-color", l), a(d).css("box-shadow", m)
			}, function () {
				a(d).css("background-color", f), a(d).css("border-color", i), a(d).css("box-shadow", j)
			});
			var n = {},
				o = a(d).data("responsive_margins");
			"undefined" != typeof o && null != o && (n = g(o));
			var p = {},
				q = a(d).data("normal_margins");
			p = "undefined" != typeof q && null != q ? g(q) : e(d);
			var r = a(b).width() || "";
			"" != r && (r >= 768 ? h(p, d) : h(n, d))
		})
	}

	function e(b) {
		var c = {};
		c["margin-left"] = f(a(b).css("margin-left")), c["margin-right"] = f(a(b).css("margin-right")), c["margin-top"] = f(a(b).css("margin-top")), c["margin-bottom"] = f(a(b).css("margin-bottom"));
		var d = "";
		return a.each(c, function (a, b) {
			"undefined" != typeof b && null != b && (d += a + ":" + b + "px;")
		}), a(b).attr("data-normal_margins", d), c
	}

	function f(a) {
		var b;
		return "undefined" != typeof a && null != a && (b = a.split("px"), b = parseInt(b[0])), b
	}

	function g(b) {
		var d = {},
			e = b.split(";");
		return "undefined" != typeof e && null != e && a.each(e, function (a, b) {
			if (typeof b != c && null != b) {
				var e = b.split(":");
				if (typeof e[0] != c && null != e[0] && typeof e[1] != c && null != e[1]) switch (e[0]) {
					case "margin":
						d.margin = e[1];
						break;
					case "margin-left":
						d["margin-left"] = e[1];
						break;
					case "margin-right":
						d["margin-right"] = e[1];
						break;
					case "margin-top":
						d["margin-top"] = e[1];
						break;
					case "margin-bottom":
						d["margin-bottom"] = e[1]
				}
			}
		}), d
	}

	function h(b, c) {
		a.isEmptyObject(b) || a.each(b, function (b, d) {
			"undefined" != typeof d && null != d && a(c).css(b, d)
		})
	}
	jQuery(b).load(function (a) {
		d()
	}), jQuery(b).resize(function (a) {
		d()
	}), jQuery(document).ready(function (a) {
		d()
	})
}(jQuery, window), jQuery(window).load(function () {
		var a = function () {
			var a = "",
				b = "",
				c = "",
				d = "",
				e = "",
				f = "";
			jQuery(".ult-responsive").each(function (g, h) {
				var i = jQuery(h),
					j = i.attr("data-responsive-json-new"),
					k = i.data("ultimate-target"),
					l = "",
					m = "",
					n = "",
					o = "",
					p = "",
					q = "";
				"undefined" == typeof j && null == j || jQuery.each(jQuery.parseJSON(j), function (a, b) {
					var c = a;
					if ("undefined" != typeof b && null != b) {
						var d = b.split(";");
						jQuery.each(d, function (a, b) {
							if ("undefined" != typeof b || null != b) {
								var d = b.split(":");
								switch (d[0]) {
									case "large_screen":
										l += c + ":" + d[1] + ";";
										break;
									case "desktop":
										m += c + ":" + d[1] + ";";
										break;
									case "tablet":
										n += c + ":" + d[1] + ";";
										break;
									case "tablet_portrait":
										o += c + ":" + d[1] + ";";
										break;
									case "mobile_landscape":
										p += c + ":" + d[1] + ";";
										break;
									case "mobile":
										q += c + ":" + d[1] + ";"
								}
							}
						})
					}
				}), "" != q && (f += k + "{" + q + "}"), "" != p && (e += k + "{" + p + "}"), "" != o && (d += k + "{" + o + "}"), "" != n && (c += k + "{" + n + "}"), "" != m && (b += k + "{" + m + "}"), "" != l && (a += k + "{" + l + "}")
			});
			var g = "<style>\n/** Ultimate: CountDown Responsive **/ ";
			g += b, g += "\n@media (min-width: 1824px) { " + a + "\n}", g += "\n@media (max-width: 1199px) { " + c + "\n}", g += "\n@media (max-width: 991px)  { " + d + "\n}", g += "\n@media (max-width: 767px)  { " + e + "\n}", g += "\n@media (max-width: 479px)  { " + f + "\n}", g += "\n/** Ultimate: Tooltipster Responsive - **/</style>", jQuery("head").append(g)
		};
		a(), jQuery(".ult_countdown-dateAndTime").each(function () {
			var a = new Date(jQuery(this).html()),
				b = (60 * jQuery(this).data("time-zone"), jQuery(this).data("countformat")),
				c = jQuery(this).data("labels"),
				d = c.split(","),
				e = jQuery(this).data("labels2"),
				f = e.split(","),
				g = function () {
					return new Date(jQuery(this).data("time-now"))
				},
				h = function (a) {
					var b = jQuery(".ult_countdown-dateAndTime").attr("data-responsive-json-new"),
						c = jQuery(".ult_countdown-dateAndTime").attr("data-ultimate-target"),
						d = jQuery(".ult_countdown").attr("data-responsive-json-new"),
						e = jQuery(".ult_countdown").attr("data-ultimate-target");
					jQuery(".ult_countdown-period").addClass("ult-responsive"), jQuery(this).find(".ult_countdown-amount").attr({
						"data-ultimate-target": c,
						"data-responsive-json-new": b
					}), jQuery(this).find(".ult_countdown-period").attr({
						"data-ultimate-target": e,
						"data-responsive-json-new": d
					}), jQuery(this).find(".ult_countdown-amount").css({
						color: jQuery(this).data("tick-col")
					}), jQuery(this).find(".ult_countdown-amount").addClass("ult-responsive"), jQuery(this).find(".ult_countdown-period").css({
						"font-size": jQuery(this).data("tick-p-size"),
						color: jQuery(this).data("tick-p-col")
					}), jQuery(this).find(".ult_countdown-amount").css({
						"border-color": jQuery(this).data("br-color"),
						"border-width": jQuery(this).data("br-size"),
						"border-style": jQuery(this).data("br-style"),
						"border-radius": jQuery(this).data("br-radius"),
						background: jQuery(this).data("bg-color"),
						padding: jQuery(this).data("padd")
					}), "bold" == jQuery(this).data("tick-style") ? jQuery(this).find(".ult_countdown-amount").css("font-weight", "bold") : "italic" == jQuery(this).data("tick-style") ? jQuery(this).find(".ult_countdown-amount").css("font-style", "italic") : "boldnitalic" == jQuery(this).data("tick-style") && (jQuery(this).find(".ult_countdown-amount").css("font-weight", "bold"), jQuery(this).find(".ult_countdown-amount").css("font-style", "italic")), "bold" == jQuery(this).data("tick-p-style") ? jQuery(this).find(".ult_countdown-period").css("font-weight", "bold") : "italic" == jQuery(this).data("tick-p-style") ? jQuery(this).find(".ult_countdown-period").css("font-style", "italic") : "boldnitalic" == jQuery(this).data("tick-p-style") && (jQuery(this).find(".ult_countdown-period").css("font-weight", "bold"), jQuery(this).find(".ult_countdown-period").css("font-style", "italic"))
				};
			jQuery(this).hasClass("ult-usrtz") ? jQuery(this).ult_countdown({
				labels: d,
				labels1: f,
				until: a,
				format: b,
				padZeroes: !0,
				onTick: h
			}) : jQuery(this).ult_countdown({
				labels: d,
				labels1: f,
				until: a,
				format: b,
				padZeroes: !0,
				onTick: h,
				serverSync: g
			})
		})
	}),
	function () {
		var a = !1;
		window.JQClass = function () {}, JQClass.classes = {}, JQClass.extend = function b(c) {
			function d() {
				!a && this._init && this._init.apply(this, arguments)
			}
			var e = this.prototype;
			a = !0;
			var f = new this;
			a = !1;
			for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] ? function (a, b) {
				return function () {
					var c = this._super;
					this._super = function (b) {
						return e[a].apply(this, b)
					};
					var d = b.apply(this, arguments);
					return this._super = c, d
				}
			}(g, c[g]) : c[g];
			return d.prototype = f, d.prototype.constructor = d, d.extend = b, d
		}
	}(),
	function ($) {
		function camelCase(a) {
			return a.replace(/-([a-z])/g, function (a, b) {
				return b.toUpperCase()
			})
		}
		JQClass.classes.JQPlugin = JQClass.extend({
			name: "plugin",
			defaultOptions: {},
			regionalOptions: {},
			_getters: [],
			_getMarker: function () {
				return "is-" + this.name
			},
			_init: function () {
				$.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
				var a = camelCase(this.name);
				$[a] = this, $.fn[a] = function (b) {
					var c = Array.prototype.slice.call(arguments, 1);
					return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function () {
						if ("string" == typeof b) {
							if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
							$[a][b].apply($[a], [this].concat(c))
						} else $[a]._attach(this, b)
					})
				}
			},
			setDefaults: function (a) {
				$.extend(this.defaultOptions, a || {})
			},
			_isNotChained: function (a, b) {
				return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) || $.inArray(a, this._getters) > -1
			},
			_attach: function (a, b) {
				if (a = $(a), !a.hasClass(this._getMarker())) {
					a.addClass(this._getMarker()), b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
					var c = $.extend({
						name: this.name,
						elem: a,
						options: b
					}, this._instSettings(a, b));
					a.data(this.name, c), this._postAttach(a, c), this.option(a, b)
				}
			},
			_instSettings: function (a, b) {
				return {}
			},
			_postAttach: function (a, b) {},
			_getMetadata: function (d) {
				try {
					var f = d.data(this.name.toLowerCase()) || "";
					f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, c) {
						var d = f.substring(0, c).match(/"/g);
						return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":'
					}), f = $.parseJSON("{" + f + "}");
					for (var g in f) {
						var h = f[g];
						"string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
					}
					return f
				} catch (e) {
					return {}
				}
			},
			_getInst: function (a) {
				return $(a).data(this.name) || {}
			},
			option: function (a, b, c) {
				a = $(a);
				var d = a.data(this.name);
				if (!b || "string" == typeof b && null == c) {
					var e = (d || {}).options;
					return e && b ? e[b] : e
				}
				if (a.hasClass(this._getMarker())) {
					var e = b || {};
					"string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e)
				}
			},
			_optionsChanged: function (a, b, c) {},
			destroy: function (a) {
				a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker()))
			},
			_preDestroy: function (a, b) {}
		}), $.JQPlugin = {
			createPlugin: function (a, b) {
				"object" == typeof a && (b = a, a = "JQPlugin"), a = camelCase(a);
				var c = camelCase(b.name);
				JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c]
			}
		}
	}(jQuery),
	function (a) {
		var b = "ult_countdown",
			c = 0,
			d = 1,
			e = 2,
			f = 3,
			g = 4,
			h = 5,
			i = 6;
		a.JQPlugin.createPlugin({
			name: b,
			defaultOptions: {
				until: null,
				since: null,
				timezone: null,
				serverSync: null,
				format: "dHMS",
				layout: "",
				compact: !1,
				padZeroes: !1,
				significant: 0,
				description: "",
				expiryUrl: "",
				expiryText: "",
				alwaysExpire: !1,
				onExpiry: null,
				onTick: null,
				tickInterval: 1
			},
			regionalOptions: {
				"": {
					labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
					labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
					compactLabels: ["y", "m", "w", "d"],
					whichLabels: null,
					digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
					timeSeparator: ":",
					isRTL: !1
				}
			},
			_getters: ["getTimes"],
			_rtlClass: b + "-rtl",
			_sectionClass: b + "-section",
			_amountClass: b + "-amount",
			_periodClass: b + "-period",
			_rowClass: b + "-row",
			_holdingClass: b + "-holding",
			_showClass: b + "-show",
			_descrClass: b + "-descr",
			_timerElems: [],
			_init: function () {
				function b(a) {
					var h = a < 1e12 ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
					h - g >= 1e3 && (c._updateElems(), g = h), f(b)
				}
				var c = this;
				this._super(), this._serverSyncs = [];
				var d = "function" == typeof Date.now ? Date.now : function () {
						return (new Date).getTime()
					},
					e = window.performance && "function" == typeof window.performance.now,
					f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
					g = 0;
				!f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, setInterval(function () {
					c._updateElems()
				}, 980)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
			},
			UTCDate: function (a, b, c, d, e, f, g, h) {
				"object" == typeof b && b.constructor == Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
				var i = new Date;
				return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
			},
			periodsToSeconds: function (a) {
				return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
			},
			_instSettings: function (a, b) {
				return {
					_periods: [0, 0, 0, 0, 0, 0, 0]
				}
			},
			_addElem: function (a) {
				this._hasElem(a) || this._timerElems.push(a)
			},
			_hasElem: function (b) {
				return a.inArray(b, this._timerElems) > -1
			},
			_removeElem: function (b) {
				this._timerElems = a.map(this._timerElems, function (a) {
					return a == b ? null : a
				})
			},
			_updateElems: function () {
				for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
			},
			_optionsChanged: function (b, c, d) {
				d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
				var e = c.options.timezone != d.timezone;
				a.extend(c.options, d), this._adjustSettings(b, c, null != d.until || null != d.since || e);
				var f = new Date;
				(c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
			},
			_updateCountdown: function (b, c) {
				if (b = b.jquery ? b : a(b), c = c || b.data(this.name)) {
					if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), a.isFunction(c.options.onTick)) {
						var d = "lap" != c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
						1 != c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval != 0 || c.options.onTick.apply(b[0], [d])
					}
					var e = "pause" != c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
					if (e && !c._expiring) {
						if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
							if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
								var f = c.options.layout;
								c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = f
							}
							c.options.expiryUrl && (window.location = c.options.expiryUrl)
						}
						c._expiring = !1
					} else "pause" == c._hold && this._removeElem(b[0])
				}
			},
			_resetExtraLabels: function (a, b) {
				var c = !1;
				for (var d in b)
					if ("whichLabels" != d && d.match(/[Ll]abels/)) {
						c = !0;
						break
					} if (c)
					for (var d in a) d.match(/[Ll]abels[02-9]|compactLabels1/) && (a[d] = null)
			},
			_adjustSettings: function (b, c, d) {
				for (var e, f = 0, g = null, h = 0; h < this._serverSyncs.length; h++)
					if (this._serverSyncs[h][0] == c.options.serverSync) {
						g = this._serverSyncs[h][1];
						break
					} if (null != g) f = c.options.serverSync ? g : 0, e = new Date;
				else {
					var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null;
					e = new Date, f = i ? e.getTime() - i.getTime() : 0, this._serverSyncs.push([c.options.serverSync, f])
				}
				var j = c.options.timezone;
				j = null == j ? -e.getTimezoneOffset() : j, (d || !d && null == c._until && null == c._since) && (c._since = c.options.since, null != c._since && (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && f && c._since.setMilliseconds(c._since.getMilliseconds() + f)), c._until = this.UTCDate(j, this._determineTime(c.options.until, e)), f && c._until.setMilliseconds(c._until.getMilliseconds() + f)), c._show = this._determineShow(c)
			},
			_preDestroy: function (a, b) {
				this._removeElem(a[0]), a.empty()
			},
			pause: function (a) {
				this._hold(a, "pause")
			},
			lap: function (a) {
				this._hold(a, "lap")
			},
			resume: function (a) {
				this._hold(a, null)
			},
			toggle: function (b) {
				var c = a.data(b, this.name) || {};
				this[c._hold ? "resume" : "pause"](b)
			},
			toggleLap: function (b) {
				var c = a.data(b, this.name) || {};
				this[c._hold ? "resume" : "lap"](b)
			},
			_hold: function (b, c) {
				var d = a.data(b, this.name);
				if (d) {
					if ("pause" == d._hold && !c) {
						d._periods = d._savePeriods;
						var e = d._since ? "-" : "+";
						d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
					}
					d._hold = c, d._savePeriods = "pause" == c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
				}
			},
			getTimes: function (b) {
				var c = a.data(b, this.name);
				return c ? "pause" == c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
			},
			_determineTime: function (a, b) {
				var c = this,
					d = function (a) {
						var b = new Date;
						return b.setTime(b.getTime() + 1e3 * a), b
					},
					e = function (a) {
						a = a.toLowerCase();
						for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
							switch (k[2] || "s") {
								case "s":
									i += parseInt(k[1], 10);
									break;
								case "m":
									h += parseInt(k[1], 10);
									break;
								case "h":
									g += parseInt(k[1], 10);
									break;
								case "d":
									f += parseInt(k[1], 10);
									break;
								case "w":
									f += 7 * parseInt(k[1], 10);
									break;
								case "o":
									e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
									break;
								case "y":
									d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
							}
							k = j.exec(a)
						}
						return new Date(d, e, f, g, h, i, 0)
					},
					f = null == a ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
				return f && f.setMilliseconds(0), f
			},
			_getDaysInMonth: function (a, b) {
				return 32 - new Date(a, b, 32).getDate()
			},
			_normalLabels: function (a) {
				return a
			},
			_generateHTML: function (b) {
				var j = this;
				b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
				for (var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = c; o <= i; o++) k |= "?" == b._show[o] && b._periods[o] > 0, n[o] = "?" != b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
				for (var p = [!1, !1, !1, !1, !1, !1, !1], o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
				var q = b.options.compact ? b.options.compactLabels : b.options.labels,
					r = b.options.whichLabels || this._normalLabels,
					s = function (a) {
						var c = b.options["compactLabels" + r(b._periods[a])];
						return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
					},
					t = b.options.padZeroes ? 2 : 1,
					u = function (a) {
						var c = b.options["labels" + r(b._periods[a])];
						return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="ult_time-mid"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span></span>" : ""
					};
				return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
			},
			_buildLayout: function (b, j, k, l, m, n) {
				for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function (a) {
						return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
					}, r = function (a, c) {
						return b.options.digits[Math.floor(a / c) % 10]
					}, s = {
						desc: b.options.description,
						sep: b.options.timeSeparator,
						yl: q(c),
						yn: this._minDigits(b, b._periods[c], 1),
						ynn: this._minDigits(b, b._periods[c], 2),
						ynnn: this._minDigits(b, b._periods[c], 3),
						y1: r(b._periods[c], 1),
						y10: r(b._periods[c], 10),
						y100: r(b._periods[c], 100),
						y1000: r(b._periods[c], 1e3),
						ol: q(d),
						on: this._minDigits(b, b._periods[d], 1),
						onn: this._minDigits(b, b._periods[d], 2),
						onnn: this._minDigits(b, b._periods[d], 3),
						o1: r(b._periods[d], 1),
						o10: r(b._periods[d], 10),
						o100: r(b._periods[d], 100),
						o1000: r(b._periods[d], 1e3),
						wl: q(e),
						wn: this._minDigits(b, b._periods[e], 1),
						wnn: this._minDigits(b, b._periods[e], 2),
						wnnn: this._minDigits(b, b._periods[e], 3),
						w1: r(b._periods[e], 1),
						w10: r(b._periods[e], 10),
						w100: r(b._periods[e], 100),
						w1000: r(b._periods[e], 1e3),
						dl: q(f),
						dn: this._minDigits(b, b._periods[f], 1),
						dnn: this._minDigits(b, b._periods[f], 2),
						dnnn: this._minDigits(b, b._periods[f], 3),
						d1: r(b._periods[f], 1),
						d10: r(b._periods[f], 10),
						d100: r(b._periods[f], 100),
						d1000: r(b._periods[f], 1e3),
						hl: q(g),
						hn: this._minDigits(b, b._periods[g], 1),
						hnn: this._minDigits(b, b._periods[g], 2),
						hnnn: this._minDigits(b, b._periods[g], 3),
						h1: r(b._periods[g], 1),
						h10: r(b._periods[g], 10),
						h100: r(b._periods[g], 100),
						h1000: r(b._periods[g], 1e3),
						ml: q(h),
						mn: this._minDigits(b, b._periods[h], 1),
						mnn: this._minDigits(b, b._periods[h], 2),
						mnnn: this._minDigits(b, b._periods[h], 3),
						m1: r(b._periods[h], 1),
						m10: r(b._periods[h], 10),
						m100: r(b._periods[h], 100),
						m1000: r(b._periods[h], 1e3),
						sl: q(i),
						sn: this._minDigits(b, b._periods[i], 1),
						snn: this._minDigits(b, b._periods[i], 2),
						snnn: this._minDigits(b, b._periods[i], 3),
						s1: r(b._periods[i], 1),
						s10: r(b._periods[i], 10),
						s100: r(b._periods[i], 100),
						s1000: r(b._periods[i], 1e3)
					}, t = k, u = c; u <= i; u++) {
					var v = "yowdhms".charAt(u),
						w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
					t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
				}
				return a.each(s, function (a, b) {
					var c = new RegExp("\\{" + a + "\\}", "g");
					t = t.replace(c, b)
				}), t
			},
			_minDigits: function (a, b, c) {
				return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
			},
			_translateDigits: function (a, b) {
				return ("" + b).replace(/[0-9]/g, function (b) {
					return a.options.digits[b]
				})
			},
			_determineShow: function (a) {
				var b = a.options.format,
					j = [];
				return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
			},
			_calculatePeriods: function (a, b, j, k) {
				a._now = k, a._now.setMilliseconds(0);
				var l = new Date(a._now.getTime());
				a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
				var m = [0, 0, 0, 0, 0, 0, 0];
				if (b[c] || b[d]) {
					var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
						o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
						p = l.getDate() == k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o),
						q = function (a) {
							return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
						},
						r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
					m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
					var s = k.getDate() == n,
						t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
					k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
				}
				var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
					v = function (a, c) {
						m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
					};
				if (v(e, 604800), v(f, 86400), v(g, 3600), v(h, 60), v(i, 1), u > 0 && !a._since)
					for (var w = [1, 12, 4.3482, 7, 24, 60, 60], x = i, y = 1, z = i; z >= c; z--) b[z] && (m[x] >= y && (m[x] = 0, u = 1), u > 0 && (m[z]++, u = 0, x = z, y = 1)), y *= w[z];
				if (j)
					for (var z = c; z <= i; z++) j && m[z] ? j-- : j || (m[z] = 0);
				return m
			}
		})
	}(jQuery), jQuery(document).ready(function () {
		jQuery(".ult_colorlink").hover(function () {
			var a = jQuery(this).data("style");
			if ("Style_6" == a) {
				var b = jQuery(this).find(".ult_btn6_link_top").data("color");
				jQuery(this).find(".ult_btn6_link_top").css("text-shadow", "10px 0 " + b + ", -10px 0 " + b), jQuery(this).find(".ult_btn6_link_top").css("color", b)
			}
			if ("Style_10" == a) {
				var c = jQuery(this).find(".ult_btn10_span").data("bhover"),
					d = jQuery(this).find(".ult_btn10_span").data("bstyle");
				" " != d && (jQuery(this).find(".ult_btn10_span").css("border-top-style", "solid"), jQuery(this).find(".ult_btn10_span").css("border-top-color", c))
			}
			var e = jQuery(this).data("texthover"),
				f = jQuery(this).data("bghover");
			jQuery(this).css("color", e), jQuery(this).find(".ult_btn10_span").css("color", e), "Style_2" == a && jQuery(this).find(".ult_btn10_span").css("background", f)
		}, function () {
			var a = jQuery(this).data("style");
			if ("Style_6" == a && jQuery(this).find(".ult_btn6_link_top").removeAttr("style"), "Style_10" == a) {
				var b = jQuery(this).find(".ult_btn10_span").data("color"),
					c = jQuery(this).find(".ult_btn10_span").data("bstyle");
				" " != c && (jQuery(this).find(".ult_btn10_span").css("border-top-style", c), jQuery(this).find(".ult_btn10_span").css("border-top-color", b))
			}
			var d = jQuery(this).data("textcolor"),
				e = jQuery(this).data("bgcolor");
			jQuery(this).css("color", d), jQuery(this).find(".ult_btn10_span").css("color", d), "Style_2" == a && jQuery(this).find(".ult_btn10_span").css("background", e)
		})
	}), jQuery(window).load(function () {
		ult_creative_link_ht()
	}), jQuery(document).ready(function (a) {
		ult_creative_link_ht()
	}), jQuery(window).resize(function (a) {
		ult_creative_link_ht()
	}),
	function (a) {
		"use strict";

		function b(a, b, c) {
			if ("img" === c) {
				var d = parseInt(b.outerHeight()),
					e = d / 2;
				a.css("padding-top", e + "px"), a.parent().css("margin-top", e + 20 + "px"), b.css("top", -d + "px")
			} else {
				var d = parseInt(b.outerHeight()),
					e = d / 2;
				a.css("padding-top", e + "px"), a.parent().css("margin-top", e + 20 + "px"), b.css("top", -d + "px")
			}
		}

		function c(b) {
			b.find(".timeline-icon-block").length > 0 && a(".timeline-block").each(function (b, c) {
				var d = a(this).find(".timeline-header-block"),
					e = a(this).find(".timeline-icon-block");
				e.css({
					position: "absolute"
				});
				var f = e.outerHeight(),
					g = e.outerWidth(),
					h = -(g / 2),
					i = parseInt(d.find(".timeline-header").css("padding-left").replace(/[^\d.]/g, ""));
				a(this).hasClass("timeline-post-left") ? (e.css({
					left: h,
					right: "auto"
				}), d.css({
					"padding-left": g / 2 + i + "px"
				})) : a(this).hasClass("timeline-post-right") && (e.css({
					left: "auto",
					right: h
				}), d.css({
					"padding-right": g / 2 + i + "px"
				}));
				var j = d.height(),
					k = j / 2,
					l = f / 2,
					m = k - l;
				e.css({
					top: m
				});
				var n = e.offset().left,
					o = a(window).width();
				(0 > n || o < n + g) && (e.css({
					position: "relative",
					top: "auto",
					left: "auto",
					right: "auto",
					"text-align": "center"
				}), e.children().children().css({
					margin: "10px auto"
				}), d.css({
					padding: "0"
				}))
			})
		}

		function d() {
			jQuery(".ult-animation").each(function () {
				if (jQuery(this).attr("data-animate")) {
					var a = jQuery(this).children("*"),
						b = jQuery(this).attr("data-animate"),
						c = jQuery(this).attr("data-animation-duration") + "s",
						d = jQuery(this).attr("data-animation-iteration"),
						f = jQuery(this).attr("data-animation-delay"),
						g = (jQuery(this).attr("data-opacity_start_effect"), "opacity:1;-webkit-animation-delay:" + f + "s;-webkit-animation-duration:" + c + ";-webkit-animation-iteration-count:" + d + "; -moz-animation-delay:" + f + "s;-moz-animation-duration:" + c + ";-moz-animation-iteration-count:" + d + "; animation-delay:" + f + "s;animation-duration:" + c + ";animation-iteration-count:" + d + ";"),
						h = "opacity:1;-webkit-transition-delay: " + f + "s; -moz-transition-delay: " + f + "s; transition-delay: " + f + "s;";
					if (e(jQuery(this))) {
						var i = jQuery(this).attr("style");
						"undefined" == typeof i && (i = "test"), i = i.replace(/ /g, ""), "opacity:0;" == i && 0 !== i.indexOf(h) && jQuery(this).attr("style", h), jQuery.each(a, function (a, c) {
							var d = jQuery(c),
								f = d.attr("style");
							"undefined" == typeof f && (f = "test");
							var h = "";
							h = 0 == f.indexOf(g) ? f : g + f, d.attr("style", h), e(d) && d.addClass("animated").addClass(b)
						})
					}
				}
			})
		}

		function e(a) {
			var b = jQuery(window).scrollTop(),
				c = jQuery(window).height();
			if (jQuery(a).hasClass("ult-animate-viewport")) var d = jQuery(a).data("opacity_start_effect");
			if ("undefined" == typeof d || "" == d) var e = 2;
			else var e = 100 - d;
			var f = (jQuery(a).outerHeight(), jQuery(a).offset().top),
				g = f - b,
				h = c - c * (e / 100);
			return g <= h
		}

		function f() {
			var a = jQuery(".ult-new-ib");
			a.each(function (a, b) {
				var c = jQuery(this);
				if (c.hasClass("ult-ib-resp")) {
					var d = jQuery(document).width(),
						e = c.data("min-width"),
						f = c.data("max-width");
					d <= f && d >= e ? c.find(".ult-new-ib-content").hide() : c.find(".ult-new-ib-content").show()
				}
			})
		}

		function g() {
			var b = "";
			a(".ult-spacer").each(function (c, d) {
				var e = a(d).data("id"),
					f = (a("body").width(), a(d).data("height-mobile")),
					g = a(d).data("height-mobile-landscape"),
					h = a(d).data("height-tab"),
					i = a(d).data("height-tab-portrait"),
					j = a(d).data("height");
				"" != j && (b += " .spacer-" + e + " { height:" + j + "px } "), "" == h && "0" != h && 0 != h || (b += " @media (max-width: 1199px) { .spacer-" + e + " { height:" + h + "px } } "), "undefined" == typeof i || "" == i && "0" != i && 0 != i || (b += " @media (max-width: 991px) { .spacer-" + e + " { height:" + i + "px } } "), "undefined" == typeof g || "" == g && "0" != g && 0 != g || (b += " @media (max-width: 767px) { .spacer-" + e + " { height:" + g + "px } } "), "" == f && "0" != f && 0 != f || (b += " @media (max-width: 479px) { .spacer-" + e + " { height:" + f + "px } } ")
			}), "" != b && (b = "<style>" + b + "</style>", a("head").append(b))
		}
		a.fn.vc_translate_row = function () {
			var b = a(window).scrollTop(),
				c = a(window).height();
			a(this).each(function (d, e) {
				var f = a(e).attr("data-row-effect-mobile-disable");
				if (f = "undefined" == typeof f ? "false" : f.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var g = "true";
				else var g = "false";
				if ("true" == g && "true" == f) var h = "true";
				else var h = "false";
				if ("false" == h) {
					var i = 0,
						j = a(e).outerHeight(),
						k = a(e).offset().top,
						l = k - b,
						m = l + j,
						n = a(e).attr("data-parallax-content-sense"),
						o = n / 100,
						p = 0,
						q = c - c * (i / 100);
					if (m <= q && l <= 0) {
						if (j > c) var p = (c - m) * o;
						else var p = -(l * o);
						p < 0 && (p = 0)
					} else p = 0;
					var r = ".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator,.ult-easy-separator-wrapper";
					a(e).find(".vc-row-translate-wrapper").children().each(function (b, c) {
						jQuery(c).is(r) || a(c).css({
							transform: "translate3d(0," + p + "px,0)",
							"-webkit-transform": "translate3d(0," + p + "px,0)",
							"-ms-transform": "translate3d(0," + p + "px,0)"
						})
					})
				}
			})
		}, a.fn.vc_fade_row = function () {
			var b = a(window).scrollTop(),
				c = a(window).height();
			a(this).each(function (d, e) {
				var f = a(e).attr("data-row-effect-mobile-disable");
				if (f = "undefined" == typeof f ? "false" : f.toString(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var g = "true";
				else var g = "false";
				if ("true" == g && "true" == f) var h = "true";
				else var h = "false";
				if ("false" == h) {
					var i = 0,
						j = a(e).data("fadeout-percentage");
					j = 100 - j;
					var k = a(e).outerHeight(),
						l = a(e).offset().top,
						m = l - b,
						n = m + k,
						o = 1,
						p = c - c * (j / 100),
						q = (p - n) / p * (1 - i);
					q > 0 && (o = 1 - q), n <= p ? (o < i ? o = i : o > 1 && (o = 1), a(e).children().each(function (b, c) {
						var d = ".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator";
						a(c).is(d) || a(c).css({
							opacity: o
						})
					})) : a(e).children().each(function (b, c) {
						a(c).css({
							opacity: o
						})
					})
				}
			})
		}, jQuery(document).ready(function () {
			g()
		}), jQuery(window).scroll(function () {
			var b = jQuery(".ult-no-mobile").length;
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && b >= 1 ? jQuery(".ult-animation").css("opacity", 1) : d(), a(".vc-row-fade").vc_fade_row(), a(".vc-row-translate").vc_translate_row()
		}), jQuery(window).load(function () {
			jQuery(".ult-banner-block-custom-height").each(function (a, b) {
				var c = jQuery(this).find("img"),
					d = jQuery(this).width(),
					e = jQuery(this).height();
				c.width();
				d > e && c.css({
					width: "100%",
					height: "auto"
				})
			});
			var b = 0,
				d = 0,
				e = function () {
					jQuery(".ifb-jq-height").each(function () {
						jQuery(this).find(".ifb-back").css("height", "auto"),
							jQuery(this).find(".ifb-front").css("height", "auto");
						var a = parseInt(jQuery(this).find(".ifb-front > div").outerHeight(!0)),
							b = parseInt(jQuery(this).find(".ifb-back > div").outerHeight(!0)),
							c = a > b ? a : b;
						jQuery(this).find(".ifb-front").css("height", c + "px"), jQuery(this).find(".ifb-back").css("height", c + "px"), jQuery(this).hasClass("vertical_door_flip") ? jQuery(this).find(".ifb-flip-box").css("height", c + "px") : jQuery(this).hasClass("horizontal_door_flip") ? jQuery(this).find(".ifb-flip-box").css("height", c + "px") : jQuery(this).hasClass("style_9") && jQuery(this).find(".ifb-flip-box").css("height", c + "px")
					}), jQuery(".ifb-auto-height").each(function () {
						if (jQuery(this).hasClass("horizontal_door_flip") || jQuery(this).hasClass("vertical_door_flip")) {
							var a = parseInt(jQuery(this).find(".ifb-front > div").outerHeight()),
								b = parseInt(jQuery(this).find(".ifb-back > div").outerHeight()),
								c = a > b ? a : b;
							jQuery(this).find(".ifb-flip-box").css("height", c + "px")
						}
					})
				};
			navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 ? setTimeout(function () {
				e()
			}, 500) : e(), jQuery(document).on("ultAdvancedTabClicked", function (a, b) {
				e()
			}), jQuery(window).resize(function () {
				b++, setTimeout(function () {
					d++, b == d && e()
				}, 500)
			});
			var g = 0;
			jQuery(window).resize(function () {
				f(), jQuery(".csstime.smile-icon-timeline-wrap").each(function () {
					c(jQuery(this))
				}), a(".jstime .timeline-wrapper").each(function () {
					c(jQuery(this))
				}), "none" == jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display") ? 0 === g && (a(".jstime .timeline-wrapper").masonry("destroy"), g = 1) : 1 == g && (jQuery(".jstime .timeline-wrapper").masonry({
					itemSelector: ".timeline-block"
				}), setTimeout(function () {
					jQuery(".jstime .timeline-wrapper").masonry({
						itemSelector: ".timeline-block",
						width: "401px"
					}), jQuery(this).find(".timeline-block").each(function () {
						jQuery(this).css("left", "initial"), "0px" == jQuery(this).css("left") ? jQuery(this).addClass("timeline-post-left") : jQuery(this).addClass("timeline-post-right")
					}), g = 0
				}, 300))
			}), a(".smile-icon-timeline-wrap").each(function () {
				var b = jQuery(this).data("timeline-cutom-width");
				b && jQuery(this).css("width", 2 * b + 40 + "px");
				var d = parseInt(jQuery(this).width()),
					e = parseInt(jQuery(this).find(".timeline-block").width()),
					f = d - 2 * e - 40;
				f = f / d * 100, a(".jstime .timeline-wrapper").each(function () {
					jQuery(this).masonry({
						itemSelector: ".timeline-block"
					})
				}), setTimeout(function () {
					a(".jstime .timeline-wrapper").each(function () {
						jQuery(this).find(".timeline-block").each(function () {
							"0px" == jQuery(this).css("left") ? jQuery(this).addClass("timeline-post-left") : jQuery(this).addClass("timeline-post-right"), c(jQuery(this))
						}), jQuery(".timeline-block").each(function () {
							var a = parseInt(jQuery(this).css("top")) - parseInt(jQuery(this).next().css("top"));
							a < 14 && a > 0 || 0 == a ? jQuery(this).next().addClass("time-clash-right") : a > -14 && jQuery(this).next().addClass("time-clash-left")
						})
					}), jQuery(".timeline-post-right").each(function () {
						var a = jQuery(this).find(".timeline-icon-block").clone();
						jQuery(this).find(".timeline-icon-block").remove(), jQuery(this).find(".timeline-header-block").after(a)
					}), jQuery(".smile-icon-timeline-wrap").each(function () {
						var a = jQuery(this).data("time_block_bg_color");
						jQuery(this).find(".timeline-block").css("background-color", a), jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color", a), jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color", a), jQuery(this).find(".feat-item").css("background-color", a), jQuery(this).find(".feat-item").find(".feat-top").length > 0 ? jQuery(this).find(".feat-item l").css("border-top-color", a) : jQuery(this).find(".feat-item l").css("border-bottom-color", a)
					}), jQuery(".jstime.timeline_preloader").remove(), jQuery(".smile-icon-timeline-wrap.jstime").css("opacity", "1")
				}, 1e3), jQuery(this).find(".timeline-wrapper").each(function () {
					"" === jQuery(this).text().trim() && jQuery(this).remove()
				}), jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text") || jQuery(this).find(".timeline-line").prepend("<o></o>");
				var g = jQuery(this).data("time_sep_color"),
					h = jQuery(this).data("time_sep_bg_color"),
					i = jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");
				jQuery(this).find(".timeline-dot").css("background-color", h), jQuery(this).find(".timeline-line z").css("background-color", h), jQuery(this).find(".timeline-line o").css("background-color", h), jQuery(this).find(".timeline-separator-text").css("color", g), jQuery(this).find(".timeline-separator-text .sep-text").css("background-color", h), jQuery(this).find(".ult-timeline-arrow s").css("border-color", "rgba(255, 255, 255, 0) " + i), jQuery(this).find(".feat-item .ult-timeline-arrow s").css("border-color", i + " rgba(255, 255, 255, 0)"), jQuery(this).find(".timeline-block").css("border-color", i), jQuery(this).find(".feat-item").css("border-color", i)
			})
		}), jQuery(document).ready(function (a) {
			var e = jQuery(".ult-no-mobile").length;
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && e >= 1 ? jQuery(".ult-animation").css("opacity", 1) : d(), f(), jQuery(".ubtn").hover(function () {
				var a = jQuery(this);
				a.find(".ubtn-text").css("color", a.data("hover")), a.find(".ubtn-hover").css("background", a.data("hover-bg")).addClass("ubtn-hover-active");
				var b = "" != a.data("hover-bg") && a.data("hover-bg");
				setTimeout(function () {
					b !== !1 && a.hasClass(".ubtn-fade-bg") && a.css("background", a.data("hover-bg"))
				}, 150);
				var c = a.attr("style");
				if ("" != a.data("shadow-hover")) {
					a.css("box-shadow");
					c += "box-shadow:" + a.data("shadow-hover")
				}
				if (a.attr("style", c), "" != a.data("border-hover") && a.css("border-color", a.data("border-hover")), "none" != a.data("shadow-click")) {
					var d = a.data("shd-shadow") - 3;
					"" != a.is(".shd-left") ? a.css({
						right: d
					}) : "" != a.is(".shd-right") ? a.css({
						left: d
					}) : "" != a.is(".shd-top") ? a.css({
						bottom: d
					}) : "" != a.is(".shd-bottom") && a.css({
						top: d
					})
				}
			}, function () {
				var a = jQuery(this);
				a.find(".ubtn-text").removeAttr("style"), a.find(".ubtn-hover").removeClass("ubtn-hover-active"), a.css("background", a.data("bg"));
				var b = a.data("border-color"),
					c = a.attr("style");
				"" != a.data("shadow-hover") && (c += "box-shadow:" + a.data("shadow")), a.attr("style", c), "" != a.data("border-hover") && a.css("border-color", b), "none" != a.data("shadow-click") && (a.removeClass("no-ubtn-shadow"), "" != a.is(".shd-left") ? a.css({
					right: "auto"
				}) : "" != a.is(".shd-right") ? a.css({
					left: "auto"
				}) : "" != a.is(".shd-top") ? a.css({
					bottom: "auto"
				}) : "" != a.is(".shd-bottom") && a.css({
					top: "auto"
				}))
			}), jQuery(".ubtn").on("focus blur mousedown mouseup", function (a) {
				var b = jQuery(this);
				"none" != b.data("shadow-click") && setTimeout(function () {
					b.is(":focus") ? (b.addClass("no-ubtn-shadow"), "" != b.is(".shd-left") ? b.css({
						right: b.data("shd-shadow") + "px"
					}) : "" != b.is(".shd-right") ? b.css({
						left: b.data("shd-shadow") + "px"
					}) : "" != b.is(".shd-top") ? b.css({
						bottom: b.data("shd-shadow") + "px"
					}) : "" != b.is(".shd-bottom") && b.css({
						top: b.data("shd-shadow") + "px"
					})) : (b.removeClass("no-ubtn-shadow"), "" != b.is(".shd-left") ? b.css({
						right: "auto"
					}) : "" != b.is(".shd-right") ? b.css({
						left: "auto"
					}) : "" != b.is(".shd-top") ? b.css({
						bottom: "auto"
					}) : "" != b.is(".shd-bottom") && b.css({
						top: "auto"
					}))
				}, 0)
			}), jQuery(".ubtn").focusout(function () {
				var a = jQuery(this);
				a.removeClass("no-ubtn-shadow"), "" != a.is(".shd-left") ? a.css({
					right: "auto"
				}) : "" != a.is(".shd-right") ? a.css({
					left: "auto"
				}) : "" != a.is(".shd-top") ? a.css({
					bottom: "auto"
				}) : "" != a.is(".shd-bottom") && a.css({
					top: "auto"
				})
			}), jQuery(".smile-icon-timeline-wrap.jstime").css("opacity", "0"), jQuery(".jstime.timeline_preloader").css("opacity", "1"), jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function () {
				jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"), jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right")
			}), jQuery(".csstime .timeline-post-right").each(function () {
				jQuery(this).css("float", "right"), jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this))
			}), jQuery(".csstime.smile-icon-timeline-wrap").each(function () {
				var a = jQuery(this).data("time_block_bg_color");
				jQuery(this).find(".timeline-block").css("background-color", a), jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color", a), jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color", a), jQuery(this).find(".feat-item").css("background-color", a), jQuery(this).find(".feat-item").find(".feat-top").length > 0 ? jQuery(this).find(".feat-item l").css("border-top-color", a) : jQuery(this).find(".feat-item l").css("border-bottom-color", a), c(jQuery(this))
			}), jQuery(".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector").each(function () {
				if (jQuery(this).attr("data-animation")) {
					var b = jQuery(this).attr("data-animation"),
						c = "delay-" + jQuery(this).attr("data-animation-delay");
					if ("undefined" == typeof b || "" === b) return !1;
					a(this).bsf_appear(function () {
						var a = jQuery(this);
						a.addClass("animated").addClass(b), a.addClass("animated").addClass(c)
					})
				}
			}), jQuery(".stats-block").each(function () {
				a(this).bsf_appear(function () {
					var a = parseFloat(jQuery(this).find(".stats-number").data("counter-value")),
						b = jQuery(this).find(".stats-number").data("counter-value") + " ",
						c = parseInt(jQuery(this).find(".stats-number").data("speed")),
						d = jQuery(this).find(".stats-number").data("id"),
						e = jQuery(this).find(".stats-number").data("separator"),
						f = jQuery(this).find(".stats-number").data("decimal"),
						g = b.split(".");
					g = g[1] ? g[1].length - 1 : 0;
					var h = !0;
					"none" == f && (f = ""), h = "none" != e;
					var i = {
							useEasing: !0,
							useGrouping: h,
							separator: e,
							decimal: f
						},
						j = new countUp(d, 0, a, g, c, i);
					setTimeout(function () {
						j.start()
					}, 500)
				})
			}), jQuery(document).on("click", "#page", function () {
				jQuery(".ifb-hover").removeClass("ifb-hover")
			}), jQuery(document).on("hover", ".ifb-flip-box", function (a) {
				a.stopPropagation(), jQuery(this).toggleClass("ifb-hover")
			}), jQuery(".ifb-flip-box").each(function (a, b) {
				jQuery(this).parent().hasClass("style_9") && (jQuery(this).hover(function () {
					jQuery(this).addClass("ifb-door-hover")
				}, function () {
					jQuery(this).removeClass("ifb-door-hover")
				}), jQuery(this).on("click", function () {
					jQuery(this).toggleClass("ifb-door-right-open"), jQuery(this).removeClass("ifb-door-hover")
				}))
			}), jQuery(document).on("click", ".ifb-flip-box", function (a) {
				a.stopPropagation(), jQuery(document).trigger("ultFlipBoxClicked", jQuery(this))
			}), jQuery(".vertical_door_flip .ifb-front").each(function () {
				jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
			}), jQuery(".reverse_vertical_door_flip .ifb-back").each(function () {
				jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
			}), jQuery(".horizontal_door_flip .ifb-front").each(function () {
				jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
			}), jQuery(".reverse_horizontal_door_flip .ifb-back").each(function () {
				jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
			}), jQuery(".style_9 .ifb-front").each(function () {
				jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())
			}), jQuery(".style_9 .ifb-back").each(function () {
				jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'), jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())
			});
			var g = /^((?!chrome).)*safari/i.test(navigator.userAgent);
			g && (jQuery(".vertical_door_flip").each(function (a, b) {
				var c = jQuery(this).find(".flip_link").outerHeight();
				jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-multiple-front").css("width", "50.2%")
			}), jQuery(".horizontal_door_flip").each(function (a, b) {
				var c = jQuery(this).find(".flip_link").outerHeight();
				jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-multiple-front").css("height", "50.2%")
			}), jQuery(".reverse_vertical_door_flip").each(function (a, b) {
				var c = jQuery(this).find(".flip_link").outerHeight();
				jQuery(this).find(".flip_link").css("top", -c / 2 + "px")
			}), jQuery(".reverse_horizontal_door_flip").each(function (a, b) {
				var c = jQuery(this).find(".flip_link").outerHeight();
				jQuery(this).find(".flip_link").css("top", -c / 2 + "px"), jQuery(this).find(".ifb-back").css("position", "inherit")
			})), jQuery(".square_box-icon").each(function (a, c) {
				var d = jQuery(this);
				if (jQuery(this).find(".aio-icon-img").length > 0) {
					var e = jQuery(this).find(".aio-icon-img");
					b(d, e, "img"), e.find(".img-icon").load(function () {
						b(d, e, "icon")
					})
				} else {
					var e = jQuery(this).find(".aio-icon");
					b(d, e, "icon"), jQuery(window).load(function () {
						b(d, e, "icon")
					})
				}
			})
		})
	}(jQuery), jQuery(document).ready(function () {
		function a() {
			jQuery(".ult-new-ib").each(function (a, b) {
				var c = jQuery(this).data("min-height") || "";
				jQuery(this).find(".ult-new-ib-img").data("min-height") || "", jQuery(this).find(".ult-new-ib-img").data("max-width") || "";
				if ("" != c) {
					jQuery(this).addClass("ult-ib2-min-height"), jQuery(this).css("height", c), jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size");
					var d = (jQuery(this).find(".ult-new-ib-img").width(), jQuery(this).find(".ult-new-ib-img").height()),
						e = jQuery(this).width();
					(e <= c || d < c) && jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")
				}
				jQuery(this).hover(function () {
					jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("hover-opacity"))
				}, function () {
					jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("opacity"))
				})
			})
		}
		a(), jQuery(window).load(function () {
			a()
		}), jQuery(window).resize(function () {
			a()
		})
	}), jQuery(document).ready(function () {
		function a() {
			jQuery(".ultimate-map-wrapper").each(function (a, b) {
				var c = jQuery(b).attr("id");
				if ("undefined" == typeof c || "" === c) return !1;
				var d = jQuery(b).find(".ultimate_google_map").attr("id"),
					e = jQuery("#" + d).attr("data-map_override"),
					f = "true";
				jQuery("#" + d).css({
					"margin-left": 0
				});
				var g = jQuery("#" + c).parent();
				if ("full" == e && (g = jQuery("body"), f = "false"), "ex-full" == e && (g = jQuery("html"), f = "false"), !isNaN(e))
					for (var a = 0; a < e && "HTML" != g.prop("tagName"); a++) g = g.parent();
				if (0 == e || "0" == e) var h = g.width();
				else var h = g.outerWidth();
				var i = g.offset().left,
					j = jQuery("#" + d).offset().left,
					k = i - j;
				jQuery("#" + d).css({
					width: h
				}), 0 == e && "0" == e || jQuery("#" + d).css({
					"margin-left": k
				})
			})
		}
		a(), jQuery(window).load(function () {
			a()
		}), jQuery(window).resize(function () {
			a()
		}), jQuery(".ui-tabs").bind("tabsactivate", function (b, c) {
			jQuery(this).find(".ultimate-map-wrapper").length > 0 && a()
		}), jQuery(".ui-accordion").bind("accordionactivate", function (b, c) {
			jQuery(this).find(".ultimate-map-wrapper").length > 0 && a()
		}), jQuery(document).on("onUVCModalPopupOpen", function () {
			a()
		}), jQuery(document).on("UVCMapResize", function () {
			a()
		})
	}),
	function (a) {
		a(document).ready(function () {
			var b = a(window).width();
			if (b > 300 && b < 768);
			else if (b > 768 && b < 1015);
			else;
			a(document).on("mouseenter", ".ult_dual1", function () {
				var b = a(this).find(".ult-dual-btn-1").attr("class"),
					c = b.split(" "),
					b = c[1] + c[2];
				if ("Style1" == b) {
					var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
					a(this)[0].style.setProperty("background-color", d, "important")
				}
				if ("Style2" == b) var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
				if ("Style3" == b) {
					var d = a(this).find(".ult-dual-btn-1").data("bghovercolor");
					a(this).css({
						"box-shadow": " inset 0 0 20px 50px " + d
					})
				}
				if ("undefined" != b) {
					var e = a(this).find(".ult-dual-btn-1").data("icon_hover_color");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						color: e
					});
					var f = a(this).find(".ult-dual-btn-1").data("iconbghovercolor");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						background: f
					});
					var g = a(this).find(".ult-dual-btn-1").data("iconhoverborder");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						"border-color": g
					}), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
						background: f
					}), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
						"border-color": g
					});
					var h = a(this).find(".ult-dual-btn-1").data("texthovercolor");
					a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
						color: h
					})
				}
			}), a(document).on("mouseleave", ".ult_dual1", function () {
				var b = a(this).find(".ult-dual-btn-1").attr("class"),
					c = b.split(" "),
					b = c[1] + c[2];
				if ("Style1" == b) {
					var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
					a(this)[0].style.setProperty("background-color", d, "important")
				}
				if ("Style2" == b) var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
				if ("Style3" == b) {
					var d = a(this).find(".ult-dual-btn-1").data("bgcolor");
					a(this).css({
						"box-shadow": "inset 0px 0 0 0 " + d
					})
				}
				if ("undefined" != b) {
					var e = a(this).find(".ult-dual-btn-1").data("icon_color");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						color: e
					});
					var f = a(this).find(".ult-dual-btn-1").data("textcolor");
					a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
						color: f
					});
					var g = a(this).find(".ult-dual-btn-1").data("iconbgcolor");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						background: g
					});
					var h = a(this).find(".ult-dual-btn-1").data("iconborder");
					a(this).find(".ult-dual-btn-1").find(".aio-icon").css({
						"border-color": h
					}), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
						background: g
					}), a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
						"border-color": h
					})
				}
			}), a(document).on("mouseenter", ".ult_dual2", function () {
				var b = a(this).find(".ult-dual-btn-2").attr("class"),
					c = b.split(" "),
					b = c[1] + c[2];
				if ("Style1" == b) {
					var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
					a(this)[0].style.setProperty("background-color", d, "important")
				}
				if ("Style2" == b) var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
				if ("Style3" == b) {
					var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
					a(this).css({
						"box-shadow": " inset 0 0 20px 50px " + d
					})
				}
				if ("undefined" != b) {
					var e = a(this).find(".ult-dual-btn-2").data("icon_hover_color");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						color: e
					});
					var f = a(this).find(".ult-dual-btn-2").data("texthovercolor");
					a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
						color: f
					});
					var g = a(this).find(".ult-dual-btn-2").data("iconbghovercolor");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						background: g
					});
					var h = a(this).find(".ult-dual-btn-2").data("iconhoverborder");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						"border-color": h
					}), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
						background: g
					}), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
						"border-color": h
					})
				}
			}), a(document).on("mouseleave", ".ult_dual2", function () {
				var b = a(this).find(".ult-dual-btn-2").attr("class"),
					c = b.split(" "),
					b = c[1] + c[2];
				if ("Style1" == b) {
					var d = a(this).find(".ult-dual-btn-2").data("bgcolor");
					a(this)[0].style.setProperty("background-color", d, "important")
				}
				if ("Style2" == b) var d = a(this).find(".ult-dual-btn-2").data("bgcolor");
				if ("Style3" == b) {
					var d = a(this).find(".ult-dual-btn-2").data("bghovercolor");
					a(this).css({
						"box-shadow": " inset 0 0 0 0 " + d
					})
				}
				if ("undefined" != b) {
					var e = a(this).find(".ult-dual-btn-2").data("icon_color");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						color: e
					});
					var f = a(this).find(".ult-dual-btn-2").data("textcolor");
					a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
						color: f
					});
					var g = a(this).find(".ult-dual-btn-2").data("iconbgcolor");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						background: g
					});
					var h = a(this).find(".ult-dual-btn-2").data("iconborder");
					a(this).find(".ult-dual-btn-2").find(".aio-icon").css({
						"border-color": h
					}), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
						background: g
					}), a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
						"border-color": h
					})
				}
			})
		}), a(document).on("mouseenter", ".ult_main_dualbtn", function () {
			a(this).data("bhcolor")
		}), a(document).on("mouseleave", ".ult_main_dualbtn", function () {
			a(this).data("bcolor")
		})
	}(jQuery), jQuery(document).ready(function (a) {
		jQuery(".ult_main_dualbtn").each(function (a) {
			var b = jQuery(this).find(".ult_dual1").outerHeight();
			b = parseInt(b);
			var c = jQuery(this).find(".ult_dual2").outerHeight();
			c = parseInt(c), b > c ? (jQuery(this).find(".ult_dual2").css({
				height: b
			}), jQuery(this).find(".ult_dual1").css({
				height: b
			})) : b < c ? (jQuery(this).find(".ult_dual1").css({
				height: c
			}), jQuery(this).find(".ult_dual2").css({
				height: c
			})) : b == c && (jQuery(this).find(".ult_dual1").css({
				height: c
			}), jQuery(this).find(".ult_dual2").css({
				height: c
			}))
		})
	}), jQuery(document).ready(function (a) {
		recallme(), jQuery(window).load(function () {
			recallme()
		}), jQuery(window).resize(function () {
			recallme()
		})
	}), jQuery(document).ready(function () {
		jQuery(".ult_exp_content").hide(), jQuery(".ult_exp_section").click(function () {
			var a = jQuery(this).data("effect");
			if (jQuery(this).toggleClass("ult_active_section"), jQuery(this).next(".ult_exp_content").toggleClass("ult_active_section"), "slideToggle" == a && jQuery(this).next(".ult_exp_content").slideToggle(500), "fadeToggle" == a) {
				var b = jQuery(this).next(".ult_exp_content");
				b.is(":visible") ? b.fadeTo(500, 0, function () {
					b.slideUp()
				}) : b.slideDown(function () {
					b.fadeTo(500, 1)
				})
			}
			jQuery(this).trigger("select")
		}), jQuery(".ult_exp_section").select(function () {
			var a = jQuery(this).data("title"),
				b = jQuery(this).data("newtitle"),
				c = jQuery(this).data("icon"),
				d = jQuery(this).data("newicon"),
				e = jQuery(this).data("img"),
				f = jQuery(this).data("newimg"),
				g = jQuery(this).data("activetitle"),
				h = jQuery(this).data("activebg"),
				i = jQuery(this).data("activeicon"),
				j = jQuery(this).data("activeiconbg"),
				k = jQuery(this).data("activeborder");
			jQuery(this).css({
				color: g
			}), jQuery(this).parent().find(".ult_exp_section").css({
				background: h
			}), jQuery(this).find(".ult_expsection_icon").css({
				color: i
			}), jQuery(this).find(".ult_expsection_icon").css({
				background: j
			}), jQuery(this).find(".ult_expsection_icon").css({
				"border-color": k
			}), a != b && jQuery(this).find(".ult_expheader").stop().css("opacity", "0.1").html(function (c, d) {
				return d == b ? a : b
			}).animate({
				opacity: 1
			}, 300), jQuery(this).hasClass("ult_active_section") ? (c !== d && (jQuery(this).find(".ult_ex_icon").removeClass(c), jQuery(this).find(".ult_ex_icon").fadeOut(100).switchClass(c, d, 1500, "easeInOutQuad").fadeIn(300)), e !== f && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", f).fadeIn(500)) : (c !== d && (jQuery(this).find(".ult_ex_icon").removeClass(d), jQuery(this).find(".ult_ex_icon").fadeOut(100).switchClass(d, c, 1500, "easeInOutQuad").fadeIn(300)), e !== f && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", e).fadeIn(500))
		})
	}), jQuery(document).ready(function () {
		function a() {
			jQuery(".ult_exp_section_layer").each(function (a, b) {
				jQuery(b).css({
					"margin-left": 0
				});
				var c = jQuery(b).find(".ult_exp_section").data("override");
				if (0 != c) {
					var d = "true";
					if (jQuery(b).parents(".wpb_row").length > 0) var e = jQuery(b).parents(".wpb_column");
					else if (jQuery(b).parents(".wpb_column").length > 0) var e = jQuery(b).parents(".wpb_row");
					else var e = jQuery(b).parent();
					if ("full" == c && (e = jQuery("body"), d = "false"), "ex-full" == c && (e = jQuery("html"), d = "false"), !isNaN(c))
						for (var a = 1; a < c && "HTML" != e.prop("tagName"); a++) e = e.parent();
					if ("false" == d) var f = e.outerWidth();
					else var f = e.width();
					var g = e.offset().left,
						h = jQuery(b).offset().left,
						i = g - h;
					"false" == d ? jQuery(b).css({
						width: f,
						"margin-left": i
					}) : jQuery(b).css({
						width: f
					})
				}
			})
		}
		jQuery(".ult_exp_section").hover(function () {
			var a = jQuery(this).data("texthover"),
				b = jQuery(this).data("ihover"),
				c = (jQuery(this).data("cnthvrbg"), jQuery(this).data("headerhover")),
				d = jQuery(this).data("icnhvrbg"),
				e = jQuery(this).data("icnhvrborder");
			jQuery(this).hasClass("ult_active_section") || (jQuery(this).css({
				color: a,
				background: c
			}), jQuery(this).find(".ult_expsection_icon").css({
				color: b
			}), jQuery(this).find(".ult_expsection_icon").css({
				background: d
			}), jQuery(this).find(".ult_expsection_icon").css({
				"border-color": e
			}))
		}, function () {
			var a = jQuery(this).data("textcolor"),
				b = jQuery(this).data("icncolor"),
				c = (jQuery(this).data("cntbg"), jQuery(this).data("headerbg")),
				d = jQuery(this).data("icnbg"),
				e = jQuery(this).data("icnborder");
			jQuery(this).hasClass("ult_active_section") || (jQuery(this).css({
				color: a,
				background: c
			}), jQuery(this).find(".ult_expsection_icon").css({
				color: b
			}), jQuery(this).find(".ult_expsection_icon").css({
				background: d
			}), jQuery(this).find(".ult_expsection_icon").css({
				"border-color": e
			}))
		}), jQuery(".ult_exp_content").hover(function () {
			jQuery(this).parent().find(".ult_exp_section").data("cnthvrbg")
		}, function () {
			jQuery(this).parent().find(".ult_exp_section").data("cntbg")
		}), jQuery(window).resize(function () {
			a()
		}), a()
	}), jQuery(document).ready(function () {
		jQuery(".ult_exp_section").select(function () {
			var a = jQuery(this).data("height");
			if (0 != a) {
				var b = jQuery(this).offset().top,
					c = parseInt(b) - a;
				jQuery("html, body").animate({
					scrollTop: c
				}, 1200)
			}
		})
	});
var fixto = function (a, b, c) {
	function d() {
		this._vendor = null
	}

	function e() {
		var a = !1,
			b = c.createElement("div"),
			d = c.createElement("div");
		b.appendChild(d), b.style[n] = "translate(0)", b.style.marginTop = "10px", b.style.visibility = "hidden", d.style.position = "fixed", d.style.top = 0, c.body.appendChild(b);
		var e = d.getBoundingClientRect();
		return e.top > 0 && (a = !0), c.body.removeChild(b), a
	}

	function f(b, c, d) {
		this.child = b, this._$child = a(b), this.parent = c, this.options = {
			className: "fixto-fixed",
			top: 0
		}, this._setOptions(d)
	}

	function g(a, b, c) {
		f.call(this, a, b, c), this._replacer = new j.MimicNode(a), this._ghostNode = this._replacer.replacer, this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this), this._proxied_onresize = this._bind(this._onresize, this), this.start()
	}

	function h(a, b, c) {
		f.call(this, a, b, c), this.start()
	}
	var i = function () {
			var a = {
				getAll: function (a) {
					return c.defaultView.getComputedStyle(a)
				},
				get: function (a, b) {
					return this.getAll(a)[b]
				},
				toFloat: function (a) {
					return parseFloat(a, 10) || 0
				},
				getFloat: function (a, b) {
					return this.toFloat(this.get(a, b))
				},
				_getAllCurrentStyle: function (a) {
					return a.currentStyle
				}
			};
			return c.documentElement.currentStyle && (a.getAll = a._getAllCurrentStyle), a
		}(),
		j = function () {
			function b(a) {
				this.element = a, this.replacer = c.createElement("div"), this.replacer.style.visibility = "hidden", this.hide(), a.parentNode.insertBefore(this.replacer, a)
			}
			b.prototype = {
				replace: function () {
					var a = this.replacer.style,
						b = i.getAll(this.element);
					a.width = this._width(), a.height = this._height(), a.marginTop = b.marginTop, a.marginBottom = b.marginBottom, a.marginLeft = b.marginLeft, a.marginRight = b.marginRight, a.cssFloat = b.cssFloat, a.styleFloat = b.styleFloat, a.position = b.position, a.top = b.top, a.right = b.right, a.bottom = b.bottom, a.left = b.left, a.display = b.display
				},
				hide: function () {
					this.replacer.style.display = "none"
				},
				_width: function () {
					return this.element.getBoundingClientRect().width + "px"
				},
				_widthOffset: function () {
					return this.element.offsetWidth + "px"
				},
				_height: function () {
					return this.element.getBoundingClientRect().height + "px"
				},
				_heightOffset: function () {
					return this.element.offsetHeight + "px"
				},
				destroy: function () {
					a(this.replacer).remove();
					for (var b in this) this.hasOwnProperty(b) && (this[b] = null)
				}
			};
			var d = c.documentElement.getBoundingClientRect();
			return d.width || (b.prototype._width = b.prototype._widthOffset, b.prototype._height = b.prototype._heightOffset), {
				MimicNode: b,
				computedStyle: i
			}
		}();
	d.prototype = {
		_vendors: {
			webkit: {
				cssPrefix: "-webkit-",
				jsPrefix: "Webkit"
			},
			moz: {
				cssPrefix: "-moz-",
				jsPrefix: "Moz"
			},
			ms: {
				cssPrefix: "-ms-",
				jsPrefix: "ms"
			},
			opera: {
				cssPrefix: "-o-",
				jsPrefix: "O"
			}
		},
		_prefixJsProperty: function (a, b) {
			return a.jsPrefix + b[0].toUpperCase() + b.substr(1)
		},
		_prefixValue: function (a, b) {
			return a.cssPrefix + b
		},
		_valueSupported: function (a, b, c) {
			try {
				return c.style[a] = b, c.style[a] === b
			} catch (d) {
				return !1
			}
		},
		propertySupported: function (a) {
			return void 0 !== c.documentElement.style[a]
		},
		getJsProperty: function (a) {
			if (this.propertySupported(a)) return a;
			if (this._vendor) return this._prefixJsProperty(this._vendor, a);
			var b;
			for (var c in this._vendors)
				if (b = this._prefixJsProperty(this._vendors[c], a), this.propertySupported(b)) return this._vendor = this._vendors[c], b;
			return null
		},
		getCssValue: function (a, b) {
			var d = c.createElement("div"),
				e = this.getJsProperty(a);
			if (this._valueSupported(e, b, d)) return b;
			var f;
			if (this._vendor && (f = this._prefixValue(this._vendor, b), this._valueSupported(e, f, d))) return f;
			for (var g in this._vendors)
				if (f = this._prefixValue(this._vendors[g], b), this._valueSupported(e, f, d)) return this._vendor = this._vendors[g], f;
			return null
		}
	};
	var k, l, m = new d,
		n = m.getJsProperty("transform"),
		o = m.getCssValue("position", "sticky"),
		p = m.getCssValue("position", "fixed"),
		q = "Microsoft Internet Explorer" === navigator.appName;
	q && (l = parseFloat(navigator.appVersion.split("MSIE")[1])), f.prototype = {
		_mindtop: function () {
			var a = 0;
			if (this._$mind)
				for (var b, c, d = 0, e = this._$mind.length; d < e; d++)
					if (b = this._$mind[d], c = b.getBoundingClientRect(), c.height) a += c.height;
					else {
						var f = i.getAll(b);
						a += b.offsetHeight + i.toFloat(f.marginTop) + i.toFloat(f.marginBottom)
					} return a
		},
		stop: function () {
			this._stop(), this._running = !1
		},
		start: function () {
			this._running || (this._start(), this._running = !0)
		},
		destroy: function () {
			this.stop(), this._destroy(), this._$child.removeData("fixto-instance");
			for (var a in this) this.hasOwnProperty(a) && (this[a] = null)
		},
		_setOptions: function (b) {
			a.extend(this.options, b), this.options.mind && (this._$mind = a(this.options.mind)), this.options.zIndex && (this.child.style.zIndex = this.options.zIndex)
		},
		setOptions: function (a) {
			this._setOptions(a), this.refresh()
		},
		_stop: function () {},
		_start: function () {},
		_destroy: function () {},
		refresh: function () {}
	}, g.prototype = new f, a.extend(g.prototype, {
		_bind: function (a, b) {
			return function () {
				return a.call(b)
			}
		},
		_toresize: 8 === l ? c.documentElement : b,
		_onscroll: function () {
			if (this._scrollTop = c.documentElement.scrollTop || c.body.scrollTop, this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), this.options.mindBottomPadding !== !1 && (this._parentBottom -= i.getFloat(this.parent, "paddingBottom")), this.fixed) {
				if (this._scrollTop > this._parentBottom || this._scrollTop < this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfix();
				this._adjust()
			} else {
				var a = i.getAll(this.child);
				this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + i.toFloat(a.marginTop) + i.toFloat(a.marginBottom) && (this._fix(), this._adjust())
			}
		},
		_adjust: function () {
			var a = 0,
				b = this._mindtop(),
				c = 0,
				d = i.getAll(this.child),
				e = null;
			k && (e = this._getContext(), e && (e.getBoundingClientRect().top > 0 ? a -= e.getBoundingClientRect().top : a = Math.abs(e.getBoundingClientRect().top))), c = this._parentBottom - this._scrollTop - (this.child.offsetHeight + i.toFloat(d.marginBottom) + b + this.options.top), c > 0 && (c = 0), this.child.style.top = c + b + a + this.options.top - i.toFloat(d.marginTop) + "px"
		},
		_fullOffset: function (a, b, c) {
			for (var d = b[a], e = b.offsetParent; null !== e && e !== c;) d += e[a], e = e.offsetParent;
			return d
		},
		_getContext: function () {
			for (var a, b, d = this.child, e = null; !e;) {
				if (a = d.parentNode, a === c.documentElement) return null;
				if (b = i.getAll(a), "none" !== b[n]) {
					e = a;
					break
				}
				d = a
			}
			return e
		},
		_fix: function () {
			var a = this.child,
				b = a.style,
				d = i.getAll(a),
				e = a.getBoundingClientRect().left,
				f = d.width;
			if (this._saveStyles(), c.documentElement.currentStyle && (f = a.offsetWidth - (i.toFloat(d.paddingLeft) + i.toFloat(d.paddingRight) + i.toFloat(d.borderLeftWidth) + i.toFloat(d.borderRightWidth)) + "px"), k) {
				var g = this._getContext();
				g && (e = a.getBoundingClientRect().left - g.getBoundingClientRect().left)
			}
			this._replacer.replace(), b.left = e - i.toFloat(d.marginLeft) + "px", b.width = f, b.position = "fixed", b.top = this._mindtop() + this.options.top - i.toFloat(d.marginTop) + "px", this._$child.addClass(this.options.className), this.fixed = !0
		},
		_unfix: function () {
			var a = this.child.style;
			this._replacer.hide(), a.position = this._childOriginalPosition, a.top = this._childOriginalTop, a.width = this._childOriginalWidth, a.left = this._childOriginalLeft, this._$child.removeClass(this.options.className), this.fixed = !1
		},
		_saveStyles: function () {
			var a = this.child.style;
			this._childOriginalPosition = a.position, this._childOriginalTop = a.top, this._childOriginalWidth = a.width, this._childOriginalLeft = a.left
		},
		_onresize: function () {
			this.refresh()
		},
		_saveViewportHeight: function () {
			this._viewportHeight = b.innerHeight || c.documentElement.clientHeight
		},
		_stop: function () {
			this._unfix(), a(b).unbind("scroll", this._proxied_onscroll), a(this._toresize).unbind("resize", this._proxied_onresize);
		},
		_start: function () {
			this._onscroll(), a(b).bind("scroll", this._proxied_onscroll), a(this._toresize).bind("resize", this._proxied_onresize)
		},
		_destroy: function () {
			this._replacer.destroy()
		},
		refresh: function () {
			this._saveViewportHeight(), this._unfix(), this._onscroll()
		}
	}), h.prototype = new f, a.extend(h.prototype, {
		_start: function () {
			var a = i.getAll(this.child);
			this._childOriginalPosition = a.position, this._childOriginalTop = a.top, this.child.style.position = o, this.refresh()
		},
		_stop: function () {
			this.child.style.position = this._childOriginalPosition, this.child.style.top = this._childOriginalTop
		},
		refresh: function () {
			this.child.style.top = this._mindtop() + this.options.top + "px"
		}
	});
	var r = function (a, b, c) {
		return o && !c || o && c && c.useNativeSticky !== !1 ? new h(a, b, c) : p ? (void 0 === k && (k = e()), new g(a, b, c)) : "Neither fixed nor sticky positioning supported"
	};
	return l < 8 && (r = function () {
		return "not supported"
	}), a.fn.fixTo = function (b, c) {
		var d = a(b),
			e = 0;
		return this.each(function () {
			var f = a(this).data("fixto-instance");
			if (f) {
				var g = b;
				f[g].call(f, c)
			} else a(this).data("fixto-instance", r(this, d[e], c));
			e++
		})
	}, {
		FixToContainer: g,
		fixTo: r,
		computedStyle: i,
		mimicNode: j
	}
}(window.jQuery, window, document);
! function (a, b, c) {
	function d() {
		a(".flip-box").each(function (c, d) {
			var e = (a(document).width(), b.innerWidth);
			if ("" != e)
				if (e >= 768) {
					var f = a(this).attr("data-min-height") || "";
					if ("" != f) {
						if (a(this).hasClass("ifb-custom-height")) {
							if (a(this).css("height", f), a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
								var g = (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle"), a(this).find(".ifb-back").outerHeight());
								g = parseInt(f);
								var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
								h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
							}
							if (a(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
								var i = a(this).find(".ifb-front").outerHeight();
								i = parseInt(f);
								var j = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
								j = parseInt(j), j >= i && a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
							}
						}
					} else if (a(this).hasClass("ifb-jq-height")) {
						var k = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
						k = parseInt(k);
						var l = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
						l = parseInt(l), k >= l ? a(this).find(".ifb-face").css("height", k) : a(this).find(".ifb-face").css("height", l)
					} else if (a(this).hasClass("ifb-auto-height") && a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
						var g = (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle"), a(this).find(".ifb-back").outerHeight());
						g = parseInt(g);
						var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
						h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
					}
				} else {
					var f = a(this).attr("data-min-height") || "";
					if (a(this).hasClass("style_9")) {
						a(this).css("height", "initial");
						var m = a(this).find(".ifb-front-1 .ifb-front").outerHeight(),
							n = a(this).find(".ifb-back-1 .ifb-back").outerHeight();
						m > n ? a(this).css("height", m) : a(this).css("height", n)
					} else if (a(this).hasClass("ifb-jq-height")) {
						var k = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
						k = parseInt(k);
						var l = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
						l = parseInt(l), k >= l ? a(this).find(".ifb-face").css("height", k) : a(this).find(".ifb-face").css("height", l)
					} else if (a(this).hasClass("ifb-auto-height")) {
						if (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
							var g = (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle"), a(this).find(".ifb-back").outerHeight());
							g = parseInt(g);
							var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
							h = parseInt(h), h > g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
						}
					} else if (a(this).hasClass("ifb-custom-height")) {
						if ("" != f) {
							if (a(this).css("height", f), a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
								var g = (a(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle"), a(this).find(".ifb-back").outerHeight());
								g = parseInt(g);
								var h = a(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();
								h = parseInt(h), h >= g && a(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
							}
							if (a(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")) {
								var i = a(this).find(".ifb-front").outerHeight();
								i = parseInt(i);
								var j = a(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();
								j = parseInt(j), j >= i ? a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle") : a(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")
							}
						}
					} else a(this).css("height", "initial")
				}
		})
	}
	a(b).load(function (a) {
		d()
	}), a(document).ready(function (a) {
		d()
	}), a(b).resize(function (a) {
		d()
	})
}(jQuery, window),
function (a) {
	function b() {
		var a = 0;
		$jh(".uvc-heading").each(function () {
			var b, c, d, e = $jh(this).outerWidth(),
				f = $jh(this).attr("data-hline_width"),
				g = $jh(this).attr("data-hicon_type"),
				h = $jh(this).attr("data-halign"),
				i = $jh(this).attr("data-hspacer");
			if ("line_with_icon" == i) {
				var j = $jh(this).attr("id");
				a = $jh(this).attr("data-hfixer"), a = "undefined" == typeof a || "" === a ? 0 : parseInt(a);
				var k = e / 2;
				$jh(this).find(".dynamic_ultimate_heading_css").remove(), d = "auto" == f || f > e ? e : f;
				var l = d / 2;
				"selector" == g ? (c = $jh(this).find(".aio-icon").outerWidth(), b = $jh(this).find(".aio-icon").outerHeight()) : (c = $jh(this).find(".aio-icon-img").outerWidth(), b = $jh(this).find(".aio-icon-img").outerHeight());
				var m = c / 2,
					n = k - m + c + a,
					o = l;
				if (b += 3, $jh(this).find(".uvc-heading-spacer").height(b), "center" == h) {
					$jh(this).find(".aio-icon-img").css({
						margin: "0 auto"
					});
					var p = "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + n + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + n + "px;}"
				} else if ("left" == h) {
					$jh(this).find(".aio-icon-img").css({
						float: h
					});
					var p = "";
					p = "" != d ? "#" + j + " .uvc-heading-spacer.line_with_icon:before{left:" + (c + a) + "px;right:auto;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (o + c + a) + "px;right:auto;}" : "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (n - c - 2 * a) + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (n - a) + "px;}"
				} else if ("right" == h) {
					$jh(this).find(".aio-icon-img").css({
						float: h
					});
					var p = "";
					p = "" != d ? "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (c + a) + "px;left:auto;}#" + j + " .uvc-heading-spacer.line_with_icon:after{right:" + (o + c + a) + "px;left:auto;}" : "#" + j + " .uvc-heading-spacer.line_with_icon:before{right:" + (n - a) + "px;}#" + j + " .uvc-heading-spacer.line_with_icon:after{left:" + (n - c - 2 * a) + "px;}"
				}
				var q = $jh(this).attr("data-hborder_style"),
					r = $jh(this).attr("data-hborder_color"),
					s = $jh(this).attr("data-hborder_height");
				"auto" == f && "center" == h && (o = Math.floor(o - c + a));
				var t = '<div class="dynamic_ultimate_heading_css"><style>#' + j + " .uvc-heading-spacer.line_with_icon:before, #" + j + " .uvc-heading-spacer.line_with_icon:after{width:" + o + "px;border-style:" + q + ";border-color:" + r + ";border-bottom-width:" + s + "px;}" + p + "</style></div>";
				$jh(this).prepend(t)
			} else "line_only" == i && ("right" == h || "left" == h ? $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
				float: h
			}) : $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
				margin: "0 auto"
			}))
		})
	}
	$jh = a.noConflict(), $jh(document).ready(function (a) {
		b(), $jh(window).resize(function (a) {
			b()
		})
	}), a(window).load(function (a) {
		b(), jQuery(".ult_exp_section").select(function () {
			var a = jQuery(this).parent().find(".uvc-heading").length;
			a > 0 && b()
		})
	})
}(jQuery),
function (a) {
	function b() {
		a(".ultimate-call-to-action").each(function (b, c) {
			var d = a(c).data("override");
			if (0 != d) {
				a(c).css({
					"margin-left": 0
				});
				var e = "true";
				if (a(c).parents(".wpb_row").length > 0) var f = a(c).parents(".wpb_row");
				else if (a(c).parents(".wpb_column").length > 0) var f = a(c).parents(".wpb_column");
				else var f = a(c).parent();
				if ("full" == d && (f = a("body"), e = "false"), "ex-full" == d && (f = a("html"), e = "false"), !isNaN(d))
					for (var b = 1; b <= d && "HTML" != f.prop("tagName"); b++) f = f.parent();
				var g = f.outerWidth(),
					h = a(c).offset().left,
					i = (a(c).position().left, f.offset().left),
					j = f.position().left,
					k = i - h;
				"full" != d && "ex-full" != d && (k = i - j), a(c).css({
					width: g,
					"margin-left": k
				})
			}
		})
	}
	a(document).ready(function () {
		a(document).on("mouseenter", ".ultimate-call-to-action", function () {
			a(this).addClass("ultimate-call-to-action-hover");
			var b = a(this).data("background-hover");
			a(this).css({
				"background-color": b
			})
		}), a(document).on("mouseleave", ".ultimate-call-to-action", function () {
			a(this).removeClass("ultimate-call-to-action-hover");
			var b = a(this).data("background");
			a(this).css({
				"background-color": b
			})
		}), b(), a(window).resize(function () {
			b()
		})
	})
}(jQuery),
function (a, b, c) {
	function d(b, c) {
		this.bodyOverflowX, this.callbacks = {
			hide: [],
			show: []
		}, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, this.namespace = "ult-tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
	}

	function e(b, c) {
		var d = !0;
		return a.each(b, function (a, e) {
			if ("undefined" == typeof c[a] || b[a] !== c[a]) return d = !1, !1
		}), d
	}

	function f() {
		return !k && j
	}

	function g() {
		var a = c.body || c.documentElement,
			b = a.style,
			d = "transition";
		if ("string" == typeof b[d]) return !0;
		v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1);
		for (var e = 0; e < v.length; e++)
			if ("string" == typeof b[v[e] + d]) return !0;
		return !1
	}
	var h = "ulttooltipster",
		i = {
			animation: "fade",
			arrow: !0,
			arrowColor: "",
			autoClose: !0,
			content: null,
			contentAsHTML: !1,
			contentCloning: !0,
			debug: !0,
			delay: 200,
			minWidth: 0,
			ultCustomTooltipStyle: !1,
			ultContentStyle: null,
			ultBaseStyle: null,
			maxWidth: null,
			functionInit: function (a, b) {},
			functionBefore: function (a, b) {
				b()
			},
			functionReady: function (a, b) {},
			functionAfter: function (a) {},
			icon: "(?)",
			iconCloning: !0,
			iconDesktop: !1,
			iconTouch: !1,
			iconTheme: "ult-tooltipster-icon",
			interactive: !1,
			interactiveTolerance: 350,
			multiple: !1,
			offsetX: 0,
			offsetY: 0,
			onlyOne: !1,
			position: "top",
			positionTracker: !1,
			speed: 350,
			timer: 0,
			theme: "ult-tooltipster-default",
			touchDevices: !0,
			trigger: "hover",
			updateAnimation: !0,
			ult_adv_id: 0,
			ultimate_target: 0,
			responsive_json_new: 0
		};
	d.prototype = {
		_init: function () {
			var b = this;
			if (c.querySelector) {
				if (null !== b.options.content) b._content_set(b.options.content);
				else {
					var d = b.$el.attr("title");
					"undefined" == typeof d && (d = null), b._content_set(d)
				}
				var e = b.options.functionInit.call(b.$el, b.$el, b.Content);
				"undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("ult-tooltipstered"), !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function () {
					f() && !b.options.touchDevices || (b.mouseIsOverProxy = !0, b._show())
				}).on("mouseleave." + b.namespace, function () {
					f() && !b.options.touchDevices || (b.mouseIsOverProxy = !1)
				}), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function () {
					b._showNow()
				})) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function () {
					f() && !b.options.touchDevices || b._show()
				})
			}
		},
		_responsive: function () {
			var a = "",
				b = "",
				c = "",
				d = "",
				e = "",
				f = "";
			jQuery(".ult-responsive").each(function (g, h) {
				var i = jQuery(h),
					j = i.attr("data-responsive-json-new"),
					k = i.data("ultimate-target"),
					l = "",
					m = "",
					n = "",
					o = "",
					p = "",
					q = "";
				jQuery(h).hasClass("ult-tooltipster-content"), "undefined" == typeof j && null == j || jQuery.each(jQuery.parseJSON(j), function (a, b) {
					var c = a;
					if ("undefined" != typeof b && null != b) {
						var d = b.split(";");
						jQuery.each(d, function (a, b) {
							if ("undefined" != typeof b || null != b) {
								var d = b.split(":");
								switch (d[0]) {
									case "large_screen":
										l += c + ":" + d[1] + ";";
										break;
									case "desktop":
										m += c + ":" + d[1] + ";";
										break;
									case "tablet":
										n += c + ":" + d[1] + ";";
										break;
									case "tablet_portrait":
										o += c + ":" + d[1] + ";";
										break;
									case "mobile_landscape":
										p += c + ":" + d[1] + ";";
										break;
									case "mobile":
										q += c + ":" + d[1] + ";"
								}
							}
						})
					}
				}), "" != q && (f += k + "{" + q + "}"), "" != p && (e += k + "{" + p + "}"), "" != o && (d += k + "{" + o + "}"), "" != n && (c += k + "{" + n + "}"), "" != m && (b += k + "{" + m + "}"), "" != l && (a += k + "{" + l + "}")
			});
			var g = "<style>\n/** Ultimate: Tooltipster Responsive **/ ";
			g += b, g += "\n@media (min-width: 1824px) { " + a + "\n}", g += "\n@media (max-width: 1199px) { " + c + "\n}", g += "\n@media (max-width: 991px)  { " + d + "\n}", g += "\n@media (max-width: 767px)  { " + e + "\n}", g += "\n@media (max-width: 479px)  { " + f + "\n}", g += "\n/** Ultimate: Tooltipster Responsive - **/</style>", jQuery("head").append(g)
		},
		_show: function () {
			var a = this;
			"shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function () {
				("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && (a._showNow(), a._responsive())
			}, a.options.delay) : a._showNow()), a._responsive()
		},
		_showNow: function (c) {
			var d = this;
			d.options.functionBefore.call(d.$el, d.$el, function () {
				if (d.enabled && null !== d.Content) {
					c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".ult-tooltipstered").not(d.$el).each(function (b, c) {
						var d = a(c),
							e = d.data("ult-tooltipster-ns");
						a.each(e, function (a, b) {
							var c = d.data(b),
								e = c.status(),
								f = c.option("autoClose");
							"hidden" !== e && "disappearing" !== e && f && c.hide()
						})
					});
					var e = function () {
						d.Status = "shown", a.each(d.callbacks.show, function (a, b) {
							b.call(d.$el)
						}), d.callbacks.show = []
					};
					if ("hidden" !== d.Status) {
						var f = 0;
						"disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("ult-tooltipster-dying").addClass("ult-tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e()
					} else {
						d.Status = "appearing";
						var f = d.options.speed,
							h = BaseStyle = "";
						d.options.ultCustomTooltipStyle && (h = d.options.ultContentStyle ? d.options.ultContentStyle : "", BaseStyle = d.options.ultBaseStyle ? d.options.ultBaseStyle : ""), d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden");
						var i = "ult-tooltipster-" + d.options.animation,
							k = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
							l = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "",
							m = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
							n = d.options.interactive ? "pointer-events: auto;" : "";
						if (BaseStyle = BaseStyle + " " + l + " " + m + " " + n + " " + k, d.$tooltip = a('<div id="' + d.options.ult_adv_id + '" class="ult-tooltipster-base ' + d.options.theme + '" style="' + BaseStyle + '"><div class="ult-tooltipster-content ult-responsive" data-ultimate-target="' + d.options.ultimate_target + "\" data-responsive-json-new = '" + d.options.responsive_json_new + "' style=\"" + h + '"></div></div>'), g() && d.$tooltip.addClass(i), d._content_insert(), d.$tooltip.appendTo("body"), d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(i + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function () {
								d.reposition()
							}), d.options.autoClose)
							if (a("body").off("." + d.namespace), "hover" == d.options.trigger)
								if (j && setTimeout(function () {
										a("body").on("touchstart." + d.namespace, function () {
											d.hide()
										})
									}, 0), d.options.interactive) {
									j && d.$tooltip.on("touchstart." + d.namespace, function (a) {
										a.stopPropagation()
									});
									var o = null;
									d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function () {
										clearTimeout(o), o = setTimeout(function () {
											d.hide()
										}, d.options.interactiveTolerance)
									}).on("mouseenter." + d.namespace + "-autoClose", function () {
										clearTimeout(o)
									})
								} else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function () {
									d.hide()
								});
						else "click" == d.options.trigger && (setTimeout(function () {
							a("body").on("click." + d.namespace + " touchstart." + d.namespace, function () {
								d.hide()
							})
						}, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function (a) {
							a.stopPropagation()
						}))
					}
					d.options.timer > 0 && (d.timerHide = setTimeout(function () {
						d.timerHide = null, d.hide()
					}, d.options.timer + f))
				}
			})
		},
		_interval_set: function () {
			var b = this;
			b.checkInterval = setInterval(function () {
				if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length) "shown" != b.Status && "appearing" != b.Status || b.hide(), b._interval_cancel();
				else if (b.options.positionTracker) {
					var c = b._repositionInfo(b.$elProxy),
						d = !1;
					e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || b.reposition()
				}
			}, 200)
		},
		_interval_cancel: function () {
			clearInterval(this.checkInterval), this.checkInterval = null
		},
		_content_set: function (a) {
			"object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.Content = a
		},
		_content_insert: function () {
			var a = this,
				b = this.$tooltip.find(".ult-tooltipster-content");
			"string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content)
		},
		_update: function (a) {
			var b = this;
			b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
				width: "",
				"-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				"-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
				transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
			}).addClass("ult-tooltipster-content-changing"), setTimeout(function () {
				"hidden" != b.Status && (b.$tooltip.removeClass("ult-tooltipster-content-changing"), setTimeout(function () {
					"hidden" !== b.Status && b.$tooltip.css({
						"-webkit-transition": b.options.speed + "ms",
						"-moz-transition": b.options.speed + "ms",
						"-o-transition": b.options.speed + "ms",
						"-ms-transition": b.options.speed + "ms",
						transition: b.options.speed + "ms"
					})
				}, b.options.speed))
			}, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function () {
				"hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1)
			}))) : b.hide()
		},
		_repositionInfo: function (a) {
			return {
				dimension: {
					height: a.outerHeight(!1),
					width: a.outerWidth(!1)
				},
				offset: a.offset(),
				position: {
					left: parseInt(a.css("left")),
					top: parseInt(a.css("top"))
				}
			}
		},
		hide: function (c) {
			var d = this;
			c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
			var e = function () {
				a.each(d.callbacks.hide, function (a, b) {
					b.call(d.$el)
				}), d.callbacks.hide = []
			};
			if ("shown" == d.Status || "appearing" == d.Status) {
				d.Status = "disappearing";
				var f = function () {
					d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e()
				};
				g() ? (d.$tooltip.clearQueue().removeClass("ult-tooltipster-" + d.options.animation + "-show").addClass("ult-tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f)
			} else "hidden" == d.Status && e();
			return d
		},
		show: function (a) {
			return this._showNow(a), this
		},
		update: function (a) {
			return this.content(a)
		},
		content: function (a) {
			return "undefined" == typeof a ? this.Content : (this._update(a), this)
		},
		reposition: function () {
			function c() {
				var c = a(b).scrollLeft();
				C - c < 0 && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i)
			}

			function d(c, d) {
				h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, E = h.offset.top - j - F - 12)
			}
			var e = this;
			if (0 !== a("body").find(e.$tooltip).length) {
				e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
				var f = null,
					g = a(b).width(),
					h = e.elProxyPosition,
					i = e.$tooltip.outerWidth(!1),
					j = (e.$tooltip.innerWidth() + 1, e.$tooltip.outerHeight(!1));
				if (e.$elProxy.is("area")) {
					var k = e.$elProxy.attr("shape"),
						l = e.$elProxy.parent().attr("name"),
						m = a('img[usemap="#' + l + '"]'),
						n = m.offset().left,
						o = m.offset().top,
						p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
					if ("circle" == k) {
						var q = parseInt(p[0]),
							r = parseInt(p[1]),
							s = parseInt(p[2]);
						h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, h.offset.left = n + q - s
					} else if ("rect" == k) {
						var q = parseInt(p[0]),
							r = parseInt(p[1]),
							t = parseInt(p[2]),
							u = parseInt(p[3]);
						h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q
					} else if ("poly" == k) {
						for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) {
							var B = parseInt(p[A]);
							"even" == z ? (B > x && (x = B, 0 === A && (v = x)), B < v && (v = B), z = "odd") : (B > y && (y = B, 1 == A && (w = y)), B < w && (w = B), z = "even")
						}
						h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v
					} else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), h.offset.top = o, h.offset.left = n
				}
				var C = 0,
					D = 0,
					E = 0,
					F = parseInt(e.options.offsetY),
					G = parseInt(e.options.offsetX),
					H = e.options.position;
				if ("top" == H) {
					var I = h.offset.left + i - (h.offset.left + h.dimension.width);
					C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top")
				}
				if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) {
					var I = h.offset.left + i - (h.offset.left + h.dimension.width);
					C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top", "bottom")
				}
				if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), "left" == H) {
					C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12;
					var J = h.offset.top + j - (h.offset.top + h.dimension.height);
					if (E = h.offset.top - J / 2 - F, C < 0 && D + i > g) {
						var K = 2 * parseFloat(e.$tooltip.css("border-width")),
							L = i + C - K;
						e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
					} else C < 0 && (C = h.offset.left + G + h.dimension.width + 12, f = "left")
				}
				if ("right" == H) {
					C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12;
					var J = h.offset.top + j - (h.offset.top + h.dimension.height);
					if (E = h.offset.top - J / 2 - F, C + i > g && D < 0) {
						var K = 2 * parseFloat(e.$tooltip.css("border-width")),
							L = g - C - K;
						e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
					} else C + i > g && (C = h.offset.left - G - i - 12, f = "right")
				}
				if (e.options.arrow) {
					var M = "ult-tooltipster-arrow-" + H;
					if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color");
					else var N = e.options.arrowColor;
					if (f ? "left" == f ? (M = "ult-tooltipster-arrow-right", f = "") : "right" == f ? (M = "ult-tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")),
						P = e.$tooltip.css("border-bottom-color");
					else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")),
						P = e.$tooltip.css("border-top-color");
					else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")),
						P = e.$tooltip.css("border-right-color");
					else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")),
						P = e.$tooltip.css("border-left-color");
					else var O = parseFloat(e.$tooltip.css("border-bottom-width")),
						P = e.$tooltip.css("border-bottom-color");
					O > 1 && O++;
					var Q = "";
					if (0 !== O) {
						var R = "",
							S = "border-color: " + P + ";";
						M.indexOf("bottom") !== -1 ? R = "margin-top: -" + Math.round(O) + "px;" : M.indexOf("top") !== -1 ? R = "margin-bottom: -" + Math.round(O) + "px;" : M.indexOf("left") !== -1 ? R = "margin-right: -" + Math.round(O) + "px;" : M.indexOf("right") !== -1 && (R = "margin-left: -" + Math.round(O) + "px;"), Q = '<span class="ult-tooltipster-arrow-border" style="' + R + " " + S + ';"></span>'
					}
					e.$tooltip.find(".ult-tooltipster-arrow").remove();
					var T = '<div class="' + M + ' ult-tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';" ></span></div>';
					e.$tooltip.append(T)
				}
				e.$tooltip.css({
					top: Math.round(E) + "px",
					left: Math.round(C) + "px"
				})
			}
			return e
		},
		enable: function () {
			return this.enabled = !0, this
		},
		disable: function () {
			return this.hide(), this.enabled = !1, this
		},
		destroy: function () {
			var b = this;
			b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace);
			var c = b.$el.data("ult-tooltipster-ns");
			if (1 === c.length) {
				var d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html();
				b.$el.removeClass("ult-tooltipstered").attr("title", d).removeData(b.namespace).removeData("ult-tooltipster-ns").off("." + b.namespace)
			} else c = a.grep(c, function (a, c) {
				return a !== b.namespace
			}), b.$el.data("ult-tooltipster-ns", c);
			return b
		},
		elementIcon: function () {
			return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
		},
		elementTooltip: function () {
			return this.$tooltip ? this.$tooltip[0] : void 0
		},
		option: function (a, b) {
			return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this)
		},
		status: function () {
			return this.Status
		}
	}, a.fn[h] = function () {
		var b = arguments;
		if (0 === this.length) {
			if ("string" == typeof b[0]) {
				var c = !0;
				switch (b[0]) {
					case "setDefaults":
						a.extend(i, b[1]);
						break;
					default:
						c = !1
				}
				return !!c || this
			}
			return this
		}
		if ("string" == typeof b[0]) {
			var e = "#*$~&";
			return this.each(function () {
				var c = a(this).data("ult-tooltipster-ns"),
					d = c ? a(this).data(c[0]) : null;
				if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
				if ("function" != typeof d[b[0]]) throw new Error('Unknown method .ult-tooltipster("' + b[0] + '")');
				var f = d[b[0]](b[1], b[2]);
				if (f !== d) return e = f, !1
			}), "#*$~&" !== e ? e : this
		}
		var f = [],
			g = b[0] && "undefined" != typeof b[0].multiple,
			h = g && b[0].multiple || !g && i.multiple,
			j = b[0] && "undefined" != typeof b[0].debug,
			k = j && b[0].debug || !j && i.debug;
		return this.each(function () {
			var c = !1,
				e = a(this).data("ult-tooltipster-ns"),
				g = null;
			e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("ult-tooltipster-ns", e), a(this).data(g.namespace, g)), f.push(g)
		}), h ? f : this
	};
	var j = !!("ontouchstart" in b),
		k = !1;
	a("body").one("mousemove", function () {
		k = !0
	})
}(jQuery, window, document),
function (a, b, c) {
	a(document).ready(function (c) {
		function d() {
			var b = "",
				d = "";
			a('a[href="#"]').click(function (a) {
				a.preventDefault()
			}), c(".ult_hotspot_container.ult-hotspot-tooltip-wrapper").each(function () {
				c(this);
				c(this).data("opacity") || .5;
				c(".ult-hotspot-tooltip[data-link_style='tootip']", c(this)).each(function () {
					if (a(this).find(".aio-icon-img").length > 0) var e = a(this).find(".aio-icon-img").outerHeight(!0),
						f = a(this).find(".aio-icon-img").outerWidth(!0);
					else var e = jQuery(this).find(".aio-icon").outerHeight(!0),
						f = jQuery(this).find(".aio-icon").outerWidth(!0);
					var g = Math.round(e / 2),
						h = Math.round(f / 2),
						i = c(this).data("tooltipanimation"),
						j = c(this).data("trigger") || "hover",
						k = c(this).data("arrowposition") || "top",
						l = c(this).data("bubble-arrow"),
						m = c(this).data("tooltip-content-style"),
						n = c(this).data("tooltip-base-style"),
						o = c(this).find(".hotspot-tooltip-content").html();
					c(this).data("tooltip-offsety") || 0;
					o = c(this).find(".hotspot-tooltip-content").html(o).text();
					var p = c(this).data("mycust-id");
					b = c(this).data("ultimate-target"), d = c(this).data("responsive-json-new"), d = JSON.stringify(d), "top" == k && (g = 0), "bottom" == k && (g = e), "left" == k && (g = -g, h = 0), "right" == k && (h = f, g = -g), /firefox/.test(navigator.userAgent.toLowerCase()) && (h = 0, g = 0), c(this).ulttooltipster({
						content: o,
						position: k,
						offsetX: h,
						offsetY: g,
						ultCustomTooltipStyle: !0,
						ultContentStyle: m,
						ultBaseStyle: n,
						arrow: l,
						delay: 100,
						speed: 300,
						interactive: !0,
						animation: i,
						trigger: j,
						contentAsHTML: 1,
						ult_adv_id: p,
						responsive_json_new: d,
						ultimate_target: b
					})
				})
			})
		}
		d(), setTimeout(function () {
			a(b).load(function () {
				if (a(".ult_hotspot_container").length > 0) {
					var b = a(".ult_hotspot_container").find(".ult-hotspot-tooltip").attr("data-status") || "hide";
					"show" === b && a(".ult-tooltipstered").ulttooltipster("destroy"), d()
				}
			})
		}, 700), a(document).ajaxComplete(function (a, b, c) {
			d()
		})
	})
}(jQuery, window),
function (a, b, c) {
	function d(b, c, d, e, f, g) {
		"" != c && (c >= 768 ? a(b).find(".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item").css({
			height: d,
			width: e
		}) : a(b).find(".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item").css({
			height: f,
			width: g
		}))
	}

	function e() {
		a(".ult-ih-list").each(function (c, e) {
			var f = a(e).attr("data-shape"),
				g = a(e).attr("data-height"),
				h = a(e).attr("data-width"),
				i = a(e).attr("data-res_height"),
				j = a(e).attr("data-res_width"),
				k = jQuery(b).width() || "";
			a(e).find("li").each(function () {
				a(e).find(".ult-ih-item").addClass("ult-ih-" + f), d(e, k, g, h, i, j)
			})
		})
	}
	a(b).load(function () {
		a(".ult-ih-container").css({
			visibility: "visible",
			opacity: 1
		})
	}), a(document).ready(function () {
		e(), a(document).ajaxComplete(function (a, b, c) {
			e()
		})
	}), a(b).resize(function () {
		e()
	})
}(jQuery, window),
function (a) {
	a(document).ready(function () {
		a(document).trigger("ultImageSeparator")
	}), a(window).load(function () {
		a(document).trigger("ultImageSeparator")
	}), a(document).on("ultImageSeparator", function (b) {
		a(".ult-easy-separator-wrapper").each(function (b, c) {
			var d = a(this).attr("data-vc-row"),
				e = a(this).parents("." + d + ":first");
			e.hasClass("upb-background-text") && (e = e.parents("." + d + ":first")), a(this).appendTo(e).find(".ult-no-animation").css({
				opacity: "1"
			})
		})
	})
}(jQuery),
function (a) {
	function b() {
		a(".ultb3-box").each(function (b, c) {
			var d = a(c).outerHeight(),
				e = a(c).find(".ultb3-info").outerHeight(),
				f = (d - e) / 2;
			a(c).find(".ultb3-info").css({
				top: f
			})
		})
	}
	a(document).ready(function () {
		b(), a(window).resize(function () {
			b()
		}), jQuery(".ultb3-box .ultb3-info").each(function () {
			if (jQuery(this).attr("data-animation")) {
				jQuery(this).css("opacity", "0");
				var a = jQuery(this).attr("data-animation"),
					b = "delay-" + jQuery(this).attr("data-animation-delay");
				jQuery(this).bsf_appear(function () {
					var c = jQuery(this);
					c.addClass("animated").addClass(a), c.addClass("animated").addClass(b), c.css("opacity", "1")
				}, {
					accY: -70
				})
			}
		})
	}), a(window).load(function () {
		b()
	})
}(jQuery), jQuery(window).load(function (a) {
	info_box_set_auto_height()
}), jQuery(document).ready(function (a) {
	info_box_set_auto_height(), jQuery(window).resize(function (a) {
		info_box_set_auto_height()
	})
});
var resizedd = 0,
	time_f_arr = [];
jQuery(document).ready(function () {
		make_info_circle(".info-c-full-br", 0), responsive_check(".info-c-full-br"), calculate_clipped_circle(), jQuery(".clipped-info-circle").each(function (a, b) {
			var c = jQuery(this).outerHeight(),
				d = jQuery(this).outerWidth();
			jQuery(this).attr("data-first-width", d), jQuery(this).attr("data-first-height", c)
		}), jQuery(window).resize(function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
		}), jQuery(window).load(function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
		}), jQuery(document).on("ultAdvancedTabClicked", function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle()
		}), jQuery(".info-c-full-br").each(function () {
			"click" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").click(function () {
				var a = jQuery(this);
				jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"), show_next_info_circle(a)
			}), "hover" == jQuery(this).data("focus-on") && jQuery(this).find(".icon-circle-list .info-circle-icons").hover(function () {
				var a = jQuery(this);
				jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"), show_next_info_circle(a)
			}, function () {})
		}), setTimeout(function () {
			jQuery(".info-c-full-br").each(function () {
				var a = jQuery(this).data("slide-duration");
				a || (a = .2), jQuery(this).attr("data-slide-number", "1"), info_circle_slide(1e3 * a, jQuery(this));
				var b = jQuery(this).find(".info-circle-icons").eq(0);
				show_next_info_circle(b)
			})
		}, 1e3)
	}), jQuery(window).load(function () {
		jQuery(".info-c-full-br").each(function () {
			"on" == jQuery(this).attr("data-slide-true") && jQuery(this).hover(function () {
				jQuery(this).attr("data-slide-true", "off")
			}, function () {
				jQuery(this).attr("data-slide-true", "on")
			})
		})
	}), jQuery(document).ready(function (a) {
		jQuery(".icon_list_item").each(function (a, b) {
			var c = jQuery(this),
				d = c.find(".info-circle-img-icon").length;
			d >= 1 && c.closest("ul.smile_icon_list").addClass("ic-resp-img")
		})
	}),
	function (a) {
		a.fn.bsf_appear = function (b, c) {
			var d = a.extend({
				data: void 0,
				one: !0,
				accX: 0,
				accY: 0
			}, c);
			return this.each(function () {
				var c = a(this);
				if (c.bsf_appeared = !1, !b) return void c.trigger("bsf_appear", d.data);
				var e = a(window),
					f = function () {
						if (!c.is(":visible")) return void(c.bsf_appeared = !1);
						var a = e.scrollLeft(),
							b = e.scrollTop(),
							f = c.offset(),
							g = f.left,
							h = f.top,
							i = d.accX,
							j = d.accY,
							k = c.height(),
							l = e.height(),
							m = c.width(),
							n = e.width();
						h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.bsf_appeared || c.trigger("bsf_appear", d.data) : c.bsf_appeared = !1
					},
					g = function () {
						if (c.bsf_appeared = !0, d.one) {
							e.unbind("scroll", f);
							var g = a.inArray(f, a.fn.bsf_appear.checks);
							g >= 0 && a.fn.bsf_appear.checks.splice(g, 1)
						}
						b.apply(this, arguments)
					};
				d.one ? c.one("bsf_appear", d.data, g) : c.bind("bsf_appear", d.data, g), e.scroll(f), a.fn.bsf_appear.checks.push(f), f()
			})
		}, a.extend(a.fn.bsf_appear, {
			checks: [],
			timeout: null,
			checkAll: function () {
				var b = a.fn.bsf_appear.checks.length;
				if (b > 0)
					for (; b--;) a.fn.bsf_appear.checks[b]()
			},
			run: function () {
				a.fn.bsf_appear.timeout ? clearTimeout(a.fn.bsf_appear.timeout) : a.fn.bsf_appear.timeout = setTimeout(a.fn.bsf_appear.checkAll, 20)
			}
		}), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (b, c) {
			var d = a.fn[c];
			d && (a.fn[c] = function () {
				var b = d.apply(this, arguments);
				return a.fn.bsf_appear.run(), b
			})
		})
	}(jQuery),
	function () {
		var a, b;
		a = this.jQuery || window.jQuery, b = a(window), a.fn.stick_in_parent = function (c) {
			var d, e, f, g, h, i, j, k, l, m, n, o;
			for (null == c && (c = {}), o = c.sticky_class, i = c.inner_scrolling, n = c.recalc_every, m = c.parent, l = c.offset_top, k = c.spacer, f = c.bottoming, null == l && (l = 0), null == m && (m = void 0), null == i && (i = !0), null == o && (o = "is_stuck"), d = a(document), null == f && (f = !0), g = function (c, e, g, h, j, p, q, r) {
					var s, t, u, v, w, x, y, z, A, B, C, D;
					if (!c.data("sticky_kit")) {
						if (c.data("sticky_kit", !0), w = d.height(), y = c.parent(), null != m && (y = y.closest(m)), !y.length) throw "failed to find stick parent";
						if (u = !1, s = !1, C = null != k ? k && c.closest(k) : a("<div />"), C && C.css("position", c.css("position")), z = function () {
								var a, b, f;
								if (!r) return w = d.height(), a = parseInt(y.css("border-top-width"), 10), b = parseInt(y.css("padding-top"), 10), e = parseInt(y.css("padding-bottom"), 10), g = y.offset().top + a + b, h = y.height(), u && (u = !1, s = !1, null == k && (c.insertAfter(C), C.detach()), c.css({
									position: "",
									top: "",
									width: "",
									bottom: ""
								}).removeClass(o), f = !0), j = c.offset().top - (parseInt(c.css("margin-top"), 10) || 0) - l, p = c.outerHeight(!0), q = c.css("float"), C && C.css({
									width: c.outerWidth(!0),
									height: p,
									display: c.css("display"),
									"vertical-align": c.css("vertical-align"),
									float: q
								}), f ? D() : void 0
							}, z(), p !== h) return v = void 0, x = l, B = n, D = function () {
							var a, m, t, A, D, E;
							if (!r) return t = !1, null != B && (B -= 1, B <= 0 && (B = n, z(), t = !0)), t || d.height() === w || (z(), t = !0), A = b.scrollTop(), null != v && (m = A - v), v = A, u ? (f && (D = A + p + x > h + g, s && !D && (s = !1, c.css({
								position: "fixed",
								bottom: "",
								top: x
							}).trigger("sticky_kit:unbottom"))), A < j && (u = !1, x = l, null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.detach()), a = {
								position: "",
								width: "",
								top: ""
							}, c.css(a).removeClass(o).trigger("sticky_kit:unstick")), i && (E = b.height(), p + l > E && (s || (x -= m, x = Math.max(E - p, x), x = Math.min(l, x), u && c.css({
								top: x + "px"
							}))))) : A > j && (u = !0, a = {
								position: "fixed",
								top: x
							}, a.width = "border-box" === c.css("box-sizing") ? c.outerWidth() + "px" : c.width() + "px", c.css(a).addClass(o), null == k && (c.after(C), "left" !== q && "right" !== q || C.append(c)), c.trigger("sticky_kit:stick")), u && f && (null == D && (D = A + p + x > h + g), !s && D) ? (s = !0, "static" === y.css("position") && y.css({
								position: "relative"
							}), c.css({
								position: "absolute",
								bottom: e,
								top: "auto"
							}).trigger("sticky_kit:bottom")) : void 0
						}, A = function () {
							return z(), D()
						}, t = function () {
							if (r = !0, b.off("touchmove", D), b.off("scroll", D), b.off("resize", A), a(document.body).off("sticky_kit:recalc", A), c.off("sticky_kit:detach", t), c.removeData("sticky_kit"), c.css({
									position: "",
									bottom: "",
									top: "",
									width: ""
								}), y.position("position", ""), u) return null == k && ("left" !== q && "right" !== q || c.insertAfter(C), C.remove()), c.removeClass(o)
						}, b.on("touchmove", D), b.on("scroll", D), b.on("resize", A), a(document.body).on("sticky_kit:recalc", A), c.on("sticky_kit:detach", t), setTimeout(D, 0)
					}
				}, h = 0, j = this.length; h < j; h++) e = this[h], g(a(e));
			return this
		}
	}.call(this), jQuery(document).ready(function (a) {
		var b = function (a, b) {
				var c = "0";
				for (a += ""; a.length < b;) a = c + a;
				return a
			},
			c = function (a, c, d) {
				a = a.replace(/^\s*|\s*$/, ""), a = a.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, "#$1$1$2$2$3$3");
				var e = Math.round(256 * c) * (d ? -1 : 1),
					f = a.match(new RegExp("^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$", "i")),
					g = f && null != f[4] ? f[4] : null,
					h = f ? [f[1], f[2], f[3]] : a.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
						return parseInt(arguments[1], 16) + "," + parseInt(arguments[2], 16) + "," + parseInt(arguments[3], 16)
					}).split(/,/);
				return f ? "rgb" + (null !== g ? "a" : "") + "(" + Math[d ? "max" : "min"](parseInt(h[0], 10) + e, d ? 0 : 255) + ", " + Math[d ? "max" : "min"](parseInt(h[1], 10) + e, d ? 0 : 255) + ", " + Math[d ? "max" : "min"](parseInt(h[2], 10) + e, d ? 0 : 255) + (null !== g ? ", " + g : "") + ")" : ["#", b(Math[d ? "max" : "min"](parseInt(h[0], 10) + e, d ? 0 : 255).toString(16), 2), b(Math[d ? "max" : "min"](parseInt(h[1], 10) + e, d ? 0 : 255).toString(16), 2), b(Math[d ? "max" : "min"](parseInt(h[2], 10) + e, d ? 0 : 255).toString(16), 2)].join("")
			},
			d = function (a, b) {
				return c(a, b, !1)
			},
			e = function (a, b) {
				return c(a, b, !0)
			},
			f = a(".ult-rs-wrapper");
		count = 0, f.each(function () {
			function b(a) {
				var b = ".ult-slider-ticks" + a,
					c = w.find(b);
				c.prevAll(".ui-slider-label-ticks").css("background", n), c.nextAll(".ui-slider-label-ticks").css("background", k)
			}
			count += 1;
			var c = 0,
				f = 0,
				g = 0,
				h = a(this).find(".ult-rslider-container"),
				i = 0,
				j = h.data("slider_steps"),
				k = h.data("slider_color");
			k = k ? k : "#3BF7D1";
			var l = k,
				m = (d(l, .2), e(l, .2)),
				n = m,
				o = m,
				p = h.data("title-background"),
				q = h.data("title-box"),
				r = (h.data("slider_size"), h.data("adaptive_height")),
				s = h.data("arrow"),
				t = "border-top-color:" + p + ";";
			if (s) {
				var u = document.createElement("style");
				u.type = "text/css", u.innerHTML = ".ult-arrow" + count + ":before { " + s + " }.ult-arrow" + count + ":after { " + t + " }", document.getElementsByTagName("head")[0].appendChild(u);
				var v = "ult-arrow" + count;
				h.find(".ult-arrow").addClass(v)
			}
			var w = h,
				x = a(this),
				y = h.find(".ult-rslider"),
				z = function (c, d) {
					var e = h.find(".ui-slider-handle"),
						f = d.value || 1,
						g = ".ult-title" + f,
						j = ".ult-desc" + f;
					w.find(".ult-tooltip").hasClass("ult-done") || (w.find(".ult-tooltip").each(function (b) {
						a(this).addClass("ult-done"), e.append(a(this))
					}), i = 1), w.find(g).css("visibility", "visible"), w.find(g).siblings().css("visibility", "hidden"), x.find(j).css("display", "block"), x.find(j).siblings().css("display", "none"), b(f)
				};
			if (y.slider({
					range: "min",
					min: 1,
					max: j,
					step: 1,
					create: z,
					slide: z
				}), y.labeledslider({
					max: j - 1,
					tickInterval: 1
				}), "auto" == q) {
				h.find(".ult-tooltip").each(function () {
					var b = a(this).outerWidth(),
						d = a(this).outerHeight();
					b = b / 2 + 10, c = c > b ? c : b, f = f > d ? f : d
				});
				var A = f + "px " + c + "px 35px";
				h.css("padding", A)
			}
			"on" == r && (x.find(".ult-description").each(function () {
				var b = a(this).outerHeight();
				g = g > b ? g : b
			}), g = g + 30 + "px", x.find(".ult-desc-wrap").css("min-height", g)), h.find(".ui-slider-labels").children(".ui-slider-label-ticks").css("background", k);
			var B = {},
				C = "background";
			B[C] = o;
			var D = y.find(".ui-slider-handle");
			y.css("background", k), D.css(B), y.find(".ui-slider-range").css("background", n)
		})
	}),
	function (a) {
		a(document).ready(function () {
			a(".ult-carousel-wrapper").each(function () {
				var b = a(this);
				if (b.hasClass("ult_full_width")) {
					b.css("left", 0), b.css("right", 0);
					var c = b.attr("data-rtl"),
						d = a("html").outerWidth(),
						e = 0,
						f = b.offset().left,
						g = Math.abs(e - f),
						h = g;
					"true" === c || c === !0 ? b.css({
						position: "relative",
						right: "-" + h + "px",
						width: d + "px"
					}) : b.css({
						position: "relative",
						left: "-" + h + "px",
						width: d + "px"
					})
				}
			}), a(".ult-carousel-wrapper").each(function (b, c) {
				var d = a(c).data("gutter"),
					e = a(c).attr("id");
				if ("" != d) {
					var f = "<style>#" + e + " .slick-slide { margin:0 " + d + "px; } </style>";
					a("head").append(f)
				}
			}), a(window).resize(function () {
				a(".ult-carousel-wrapper").each(function () {
					var b = a(this);
					if (b.hasClass("ult_full_width")) {
						var c = b.attr("data-rtl");
						b.removeAttr("style");
						var d = a("html").outerWidth(),
							e = 0,
							f = b.offset().left,
							g = Math.abs(e - f),
							h = g;
						"true" === c || c === !0 ? b.css({
							position: "relative",
							right: "-" + h + "px",
							width: d + "px"
						}) : b.css({
							position: "relative",
							left: "-" + h + "px",
							width: d + "px"
						})
					}
				})
			})
		}), a(window).load(function () {
			a(".ult-carousel-wrapper").each(function () {
				var b = a(this);
				if (b.hasClass("ult_full_width")) {
					b.css("left", 0), b.css("right", 0);
					var c = 0,
						d = b.offset().left,
						e = Math.abs(c - d),
						f = b.attr("data-rtl"),
						g = a("html").outerWidth(),
						h = e;
					"true" === f || f === !0 ? b.css({
						position: "relative",
						right: "-" + h + "px",
						width: g + "px"
					}) : b.css({
						position: "relative",
						left: "-" + h + "px",
						width: g + "px"
					})
				}
			})
		})
	}(jQuery), ! function (a) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
	}(function (a) {
		"use strict";
		var b = window.Slick || {};
		b = function () {
			function b(b, d) {
				var e, f = this;
				f.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: a(b),
					appendDots: a(b),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function (b, c) {
						return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, f.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
			}
			var c = 0;
			return b
		}(), b.prototype.activateADA = function () {
			var a = this;
			a.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
			var e = this;
			if ("boolean" == typeof c) d = c, c = null;
			else if (0 > c || c >= e.slideCount) return !1;
			e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
				a(c).attr("data-slick-index", b)
			}), e.$slidesCache = e.$slides, e.reinit()
		}, b.prototype.animateHeight = function () {
			var a = this;
			if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
				var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
				a.$list.animate({
					height: b
				}, a.options.speed)
			}
		}, b.prototype.animateSlide = function (b, c) {
			var d = {},
				e = this;
			e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
				left: b
			}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
				top: b
			}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
				animStart: e.currentLeft
			}).animate({
				animStart: b
			}, {
				duration: e.options.speed,
				easing: e.options.easing,
				step: function (a) {
					a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
				},
				complete: function () {
					c && c.call()
				}
			})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
				e.disableTransition(), c.call()
			}, e.options.speed))
		}, b.prototype.getNavTarget = function () {
			var b = this,
				c = b.options.asNavFor;
			return c && null !== c && (c = a(c).not(b.$slider)), c
		}, b.prototype.asNavFor = function (b) {
			var c = this,
				d = c.getNavTarget();
			null !== d && "object" == typeof d && d.each(function () {
				var c = a(this).slick("getSlick");
				c.unslicked || c.slideHandler(b, !0)
			})
		}, b.prototype.applyTransition = function (a) {
			var b = this,
				c = {};
			b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
		}, b.prototype.autoPlay = function () {
			var a = this;
			a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
		}, b.prototype.autoPlayClear = function () {
			var a = this;
			a.autoPlayTimer && clearInterval(a.autoPlayTimer)
		}, b.prototype.autoPlayIterator = function () {
			var a = this,
				b = a.currentSlide + a.options.slidesToScroll;
			a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
		}, b.prototype.buildArrows = function () {
			var b = this;
			b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, b.prototype.buildDots = function () {
			var b, c, d = this;
			if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
				for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
				d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, b.prototype.buildOut = function () {
			var b = this;
			b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
				a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
			}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
		}, b.prototype.buildRows = function () {
			var a, b, c, d, e, f, g, h = this;
			if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
				for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
					var i = document.createElement("div");
					for (b = 0; b < h.options.rows; b++) {
						var j = document.createElement("div");
						for (c = 0; c < h.options.slidesPerRow; c++) {
							var k = a * g + (b * h.options.slidesPerRow + c);
							f.get(k) && j.appendChild(f.get(k))
						}
						i.appendChild(j)
					}
					d.appendChild(i)
				}
				h.$slider.empty().append(d), h.$slider.children().children().children().css({
					width: 100 / h.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, b.prototype.checkResponsive = function (b, c) {
			var d, e, f, g = this,
				h = !1,
				i = g.$slider.width(),
				j = window.innerWidth || a(window).width();
			if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
				e = null;
				for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
				null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
			}
		}, b.prototype.changeSlide = function (b, c) {
			var d, e, f, g = this,
				h = a(b.currentTarget);
			switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
				case "previous":
					e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
					break;
				case "next":
					e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
					break;
				case "index":
					var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
					g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
					break;
				default:
					return
			}
		}, b.prototype.checkNavigable = function (a) {
			var b, c, d = this;
			if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
			else
				for (var e in b) {
					if (a < b[e]) {
						a = c;
						break
					}
					c = b[e]
				}
			return a
		}, b.prototype.cleanUpEvents = function () {
			var b = this;
			b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
		}, b.prototype.cleanUpSlideEvents = function () {
			var b = this;
			b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
		}, b.prototype.cleanUpRows = function () {
			var a, b = this;
			b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
		}, b.prototype.clickHandler = function (a) {
			var b = this;
			b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
		}, b.prototype.destroy = function (b) {
			var c = this;
			c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				a(this).attr("style", a(this).data("originalStyling"))
			}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
		}, b.prototype.disableTransition = function (a) {
			var b = this,
				c = {};
			c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
		}, b.prototype.fadeSlide = function (a, b) {
			var c = this;
			c.cssTransitions === !1 ? (c.$slides.eq(a).css({
				zIndex: c.options.zIndex
			}), c.$slides.eq(a).animate({
				opacity: 1
			}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
				opacity: 1,
				zIndex: c.options.zIndex
			}), b && setTimeout(function () {
				c.disableTransition(a), b.call()
			}, c.options.speed))
		}, b.prototype.fadeSlideOut = function (a) {
			var b = this;
			b.cssTransitions === !1 ? b.$slides.eq(a).animate({
				opacity: 0,
				zIndex: b.options.zIndex - 2
			}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
				opacity: 0,
				zIndex: b.options.zIndex - 2
			}))
		}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
			var b = this;
			null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
		}, b.prototype.focusHandler = function () {
			var b = this;
			b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
				c.stopImmediatePropagation();
				var d = a(this);
				setTimeout(function () {
					b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
				}, 0)
			})
		}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
			var a = this;
			return a.currentSlide
		}, b.prototype.getDotCount = function () {
			var a = this,
				b = 0,
				c = 0,
				d = 0;
			if (a.options.infinite === !0)
				for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
			else if (a.options.centerMode === !0) d = a.slideCount;
			else if (a.options.asNavFor)
				for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
			else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
			return d - 1
		}, b.prototype.getLeft = function (a) {
			var b, c, d, e = this,
				f = 0;
			return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
		}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
			var b = this;
			return b.options[a]
		}, b.prototype.getNavigableIndexes = function () {
			var a, b = this,
				c = 0,
				d = 0,
				e = [];
			for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
			return e
		}, b.prototype.getSlick = function () {
			return this
		}, b.prototype.getSlideCount = function () {
			var b, c, d, e = this;
			return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
				return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
			}), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
		}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
			var c = this;
			c.changeSlide({
				data: {
					message: "index",
					index: parseInt(a)
				}
			}, b)
		}, b.prototype.init = function (b) {
			var c = this;
			a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
		}, b.prototype.initADA = function () {
			var b = this;
			b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
				a(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + b.instanceUid + c
				})
			}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
				a(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + b.instanceUid + c,
					id: "slick-slide" + b.instanceUid + c
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
		}, b.prototype.initArrowEvents = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, a.changeSlide))
		}, b.prototype.initDotEvents = function () {
			var b = this;
			b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
				message: "index"
			}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
		}, b.prototype.initSlideEvents = function () {
			var b = this;
			b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
		}, b.prototype.initializeEvents = function () {
			var b = this;
			b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
		}, b.prototype.initUI = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
		}, b.prototype.keyHandler = function (a) {
			var b = this;
			a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
				data: {
					message: b.options.rtl === !0 ? "next" : "previous"
				}
			}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
				data: {
					message: b.options.rtl === !0 ? "previous" : "next"
				}
			}))
		}, b.prototype.lazyLoad = function () {
			function b(b) {
				a("img[data-lazy]", b).each(function () {
					var b = a(this),
						c = a(this).attr("data-lazy"),
						d = document.createElement("img");
					d.onload = function () {
						b.animate({
							opacity: 0
						}, 100, function () {
							b.attr("src", c).animate({
								opacity: 1
							}, 200, function () {
								b.removeAttr("data-lazy").removeClass("slick-loading")
							}), g.$slider.trigger("lazyLoaded", [g, b, c])
						})
					}, d.onerror = function () {
						b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c])
					}, d.src = c
				})
			}
			var c, d, e, f, g = this;
			g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = Math.ceil(e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
		}, b.prototype.loadSlider = function () {
			var a = this;
			a.setPosition(), a.$slideTrack.css({
				opacity: 1
			}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
		}, b.prototype.next = b.prototype.slickNext = function () {
			var a = this;
			a.changeSlide({
				data: {
					message: "next"
				}
			})
		}, b.prototype.orientationChange = function () {
			var a = this;
			a.checkResponsive(), a.setPosition()
		}, b.prototype.pause = b.prototype.slickPause = function () {
			var a = this;
			a.autoPlayClear(), a.paused = !0
		}, b.prototype.play = b.prototype.slickPlay = function () {
			var a = this;
			a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
		}, b.prototype.postSlide = function (a) {
			var b = this;
			b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
		}, b.prototype.prev = b.prototype.slickPrev = function () {
			var a = this;
			a.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, b.prototype.preventDefault = function (a) {
			a.preventDefault()
		}, b.prototype.progressiveLazyLoad = function (b) {
			b = b || 1;
			var c, d, e, f = this,
				g = a("img[data-lazy]", f.$slider);
			g.length ? (c = g.first(), d = c.attr("data-lazy"), e = document.createElement("img"), e.onload = function () {
				c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), f.options.adaptiveHeight === !0 && f.setPosition(), f.$slider.trigger("lazyLoaded", [f, c, d]), f.progressiveLazyLoad()
			}, e.onerror = function () {
				3 > b ? setTimeout(function () {
					f.progressiveLazyLoad(b + 1)
				}, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, c, d]), f.progressiveLazyLoad())
			}, e.src = d) : f.$slider.trigger("allImagesLoaded", [f])
		}, b.prototype.refresh = function (b) {
			var c, d, e = this;
			d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
				currentSlide: c
			}), e.init(), b || e.changeSlide({
				data: {
					message: "index",
					index: c
				}
			}, !1)
		}, b.prototype.registerBreakpoints = function () {
			var b, c, d, e = this,
				f = e.options.responsive || null;
			if ("array" === a.type(f) && f.length) {
				e.respondTo = e.options.respondTo || "window";
				for (b in f)
					if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
						for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
						e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
					} e.breakpoints.sort(function (a, b) {
					return e.options.mobileFirst ? a - b : b - a
				})
			}
		}, b.prototype.reinit = function () {
			var b = this;
			b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
		}, b.prototype.resize = function () {
			var b = this;
			a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
				b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
			}, 50))
		}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
			var d = this;
			return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
		}, b.prototype.setCSS = function (a) {
			var b, c, d = this,
				e = {};
			d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
		}, b.prototype.setDimensions = function () {
			var a = this;
			a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
				padding: "0px " + a.options.centerPadding
			}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
				padding: a.options.centerPadding + " 0px"
			})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
			var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
			a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
		}, b.prototype.setFade = function () {
			var b, c = this;
			c.$slides.each(function (d, e) {
				b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
					position: "relative",
					right: b,
					top: 0,
					zIndex: c.options.zIndex - 2,
					opacity: 0
				}) : a(e).css({
					position: "relative",
					left: b,
					top: 0,
					zIndex: c.options.zIndex - 2,
					opacity: 0
				})
			}), c.$slides.eq(c.currentSlide).css({
				zIndex: c.options.zIndex - 1,
				opacity: 1
			})
		}, b.prototype.setHeight = function () {
			var a = this;
			if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
				var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
				a.$list.css("height", b)
			}
		}, b.prototype.setOption = b.prototype.slickSetOption = function () {
			var b, c, d, e, f, g = this,
				h = !1;
			if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
			else if ("multiple" === f) a.each(d, function (a, b) {
				g.options[a] = b
			});
			else if ("responsive" === f)
				for (c in e)
					if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
					else {
						for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
						g.options.responsive.push(e[c])
					} h && (g.unload(), g.reinit())
		}, b.prototype.setPosition = function () {
			var a = this;
			a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
		}, b.prototype.setProps = function () {
			var a = this,
				b = document.body.style;
			a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
		}, b.prototype.setSlideClasses = function (a) {
			var b, c, d, e, f = this;
			c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
		}, b.prototype.setupInfinite = function () {
			var b, c, d, e = this;
			if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
				for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
				for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
				e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					a(this).attr("id", "")
				})
			}
		}, b.prototype.interrupt = function (a) {
			var b = this;
			a || b.autoPlay(), b.interrupted = a
		}, b.prototype.selectHandler = function (b) {
			var c = this,
				d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
				e = parseInt(d.attr("data-slick-index"));
			return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
		}, b.prototype.slideHandler = function (a, b, c) {
			var d, e, f, g, h, i = null,
				j = this;
			return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
				j.postSlide(d)
			}) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
				j.postSlide(d)
			}) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), j.fadeSlide(e, function () {
				j.postSlide(e)
			})) : j.postSlide(e), void j.animateHeight()) : void(c !== !0 ? j.animateSlide(i, function () {
				j.postSlide(e)
			}) : j.postSlide(e))))
		}, b.prototype.startLoad = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
		}, b.prototype.swipeDirection = function () {
			var a, b, c, d, e = this;
			return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
		}, b.prototype.swipeEnd = function (a) {
			var b, c, d = this;
			if (d.dragging = !1, d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
			if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
				switch (c = d.swipeDirection()) {
					case "left":
					case "down":
						b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
						break;
					case "right":
					case "up":
						b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
				}
				"vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
			} else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
		}, b.prototype.swipeHandler = function (a) {
			var b = this;
			if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
				case "start":
					b.swipeStart(a);
					break;
				case "move":
					b.swipeMove(a);
					break;
				case "end":
					b.swipeEnd(a)
			}
		}, b.prototype.swipeMove = function (a) {
			var b, c, d, e, f, g = this;
			return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade !== !0 && g.options.touchMove !== !1 && (g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
		}, b.prototype.swipeStart = function (a) {
			var b, c = this;
			return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
		}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
			var a = this;
			null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
		}, b.prototype.unload = function () {
			var b = this;
			a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, b.prototype.unslick = function (a) {
			var b = this;
			b.$slider.trigger("unslick", [b, a]), b.destroy()
		}, b.prototype.updateArrows = function () {
			var a, b = this;
			a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, b.prototype.updateDots = function () {
			var a = this;
			null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, b.prototype.visibility = function () {
			var a = this;
			a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
		}, a.fn.slick = function () {
			var a, c, d = this,
				e = arguments[0],
				f = Array.prototype.slice.call(arguments, 1),
				g = d.length;
			for (a = 0; g > a; a++)
				if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), "undefined" != typeof c) return c;
			return d
		}
	}), jQuery(document).ready(function (a) {
		function b() {
			var b = a("div.ult-sticky-anchor");
			b.each(function () {
				var b = a(this),
					c = (b.closest(".ult_row_spacer"), b.find(".ult-sticky")),
					e = c.data("stick_behaviour"),
					g = c.data("support");
				if ("stick_with_scroll_row" == e || "no" != g) {
					var h = 0,
						i = c.data("gutter"),
						j = c.data("sticky_gutter_class"),
						k = c.data("sticky_gutter_id"),
						l = c.data("mobile");
					i = d(h, i, j, k);
					var m = b.closest(".wpb_column").closest(".vc_row");
					b.parent().offset().top;
					b.addClass("ult_stick_to_row"), m.addClass("ult_s_container"), "yes" == g && (m = "body"), f < 768 && "no" == l || b.fixTo(m, {
						top: i,
						useNativeSticky: !1
					})
				}
			})
		}

		function c() {
			elements = a("div.ult-sticky-anchor"), elements.each(function () {
				var b = a(this),
					c = b.find(".ult-sticky"),
					h = c.data("mobile"),
					i = b.find(".ult-space");
				if (f < 768 && "no" == h) return c.removeClass("ult-stick"), i.css("height", ""), void b.removeClass("ult-permanent-flag");
				var j = e.scrollTop(),
					k = b.offset().top,
					l = e.height(),
					m = c.data("stick_behaviour"),
					n = c.data("support");
				if ("stick_with_scroll_row" != m && "yes" != n) {
					var o = b.parent().width(),
						p = c.height(),
						q = 0,
						r = c.data("gutter"),
						s = c.data("sticky_gutter_class"),
						t = c.data("sticky_gutter_id"),
						u = c.data("lr_position"),
						v = c.data("lr_value"),
						w = c.data("sticky_customwidth"),
						x = c.data("sticky_width"),
						y = c.data("sticky_position"),
						z = -1;
					r = d(q, r, s, t), "top" == y ? j = parseInt(j) + parseInt(r) : (j = parseInt(j) + parseInt(l) - parseInt(p) - parseInt(r), k = parseInt(k)), "fullwidth" == x ? o = "100%" : "customwidth" == x && (o = w);
					var A = {},
						B = "width";
					A[y] = r, A[B] = o, "stick_permanent" == m && (A[u] = v);
					var C = {};
					C[y] = "", C[B] = "", "stick_permanent" != m || b.hasClass("ult-permanent-flag") || (b.addClass("ult-permanent-flag"), c.addClass("ult-stick").css(A)), "stick_with_scroll" == m && j > k ? (z = 0, b.hasClass("ult-flag") && 0 != g || (b.addClass("ult-flag"), "fullwidth" == x ? (c.addClass("ult-stick-full-width").css(A), b.find(".ult-space").css("height", p), z = 1) : (c.addClass("ult-stick").css(A), b.find(".ult-space").css("height", p), z = 1))) : "stick_with_scroll" == m && b.hasClass("ult-flag") && (b.removeClass("ult-flag"), "fullwidth" == x ? (c.removeClass("ult-stick-full-width").css(C), b.find(".ult-space").css("height", "")) : (c.removeClass("ult-stick").css(C), b.find(".ult-space").css("height", "")))
				}
			}), g = -1
		}

		function d(b, c, d, e) {
			if (d) {
				var f = d.split(" ");
				jQuery.each(f, function (c, d) {
					b = parseInt(b) + a(d).outerHeight()
				})
			} else d = "null";
			if (e) {
				var g = e.split(" ");
				jQuery.each(g, function (c, d) {
					b = parseInt(b) + a(d).outerHeight()
				})
			} else e = "null";
			return c = c ? parseInt(c) + parseInt(b) : b
		}
		var e = a(window),
			f = e.width(),
			g = -1;
		b(), c(), e.resize(function () {
			g = 0, f = e.width(), c()
		}), e.bind("scroll", function () {
			c()
		})
	}),
	function (a, b, c) {
		"use strict";
		var d = b.bsfmodernizr;
		jQuery.fn.reverse = [].reverse, a.SwatchBook = function (b, c) {
			this.$el = a(c), this._init(b)
		}, a.SwatchBook.defaults = {
			center: 6,
			angleInc: 8,
			speed: 700,
			easing: "ease",
			proximity: 45,
			neighbor: 4,
			onLoadAnim: !0,
			initclosed: !1,
			closeIdx: -1,
			openAt: -1
		}, a.SwatchBook.prototype = {
			_init: function (b) {
				this.options = a.extend(!0, {}, a.SwatchBook.defaults, b), this.$items = this.$el.children("div"), this.itemsCount = this.$items.length, this.current = -1, this.support = d.csstransitions, this.cache = [], this.options.onLoadAnim && this._setTransition(), this.options.initclosed ? (this.isClosed = !0, this.options.onLoadAnim || this._setTransition()) : this._center(this.options.center, this.options.onLoadAnim), this.options.openAt >= 0 && this.options.openAt < this.itemsCount && this._openItem(this.$items.eq(this.options.openAt)), this._initEvents()
			},
			_setTransition: function () {
				this.support && this.$items.css({
					transition: "all " + this.options.speed + "ms " + this.options.easing
				})
			},
			_openclose: function () {
				this.isClosed ? this._center(this.options.center, !0) : this.$items.css({
					transform: "rotate(0deg)"
				}), this.isClosed = !this.isClosed
			},
			_center: function (b, c) {
				var d = this;
				this.$items.each(function (c) {
					var e = "rotate(" + d.options.angleInc * (c - b) + "deg)";
					a(this).css({
						transform: e
					})
				})
			},
			_openItem: function (a) {
				var b = a.index();
				b !== this.current && (this.options.closeIdx !== -1 && b === this.options.closeIdx ? (this._openclose(), this._setCurrent()) : (this._setCurrent(a), a.css({
					transform: "rotate(0deg)"
				}), this._rotateSiblings(a)))
			},
			_initEvents: function () {
				var b = this;
				this.$items.on("click.swatchbook", function (c) {
					b._openItem(a(this))
				})
			},
			_rotateSiblings: function (b) {
				var c, d = this,
					e = b.index(),
					f = this.cache[e];
				f ? c = f : (c = b.siblings(), this.cache[e] = c), c.each(function (b) {
					var c = b < e ? d.options.angleInc * (b - e) : b - e === 1 ? d.options.proximity : d.options.proximity + (b - e - 1) * d.options.neighbor,
						f = "rotate(" + c + "deg)";
					a(this).css({
						transform: f
					})
				})
			},
			_setCurrent: function (a) {
				this.current = a ? a.index() : -1, this.$items.removeClass("ff-active"), a && a.addClass("ff-active")
			}
		};
		var e = function (a) {
			b.console && b.console.error(a)
		};
		a.fn.swatchbook = function (b) {
			var c = a.data(this, "swatchbook");
			if ("string" == typeof b) {
				var d = Array.prototype.slice.call(arguments, 1);
				this.each(function () {
					return c ? a.isFunction(c[b]) && "_" !== b.charAt(0) ? void c[b].apply(c, d) : void e("no such method '" + b + "' for swatchbook instance") : void e("cannot call methods on swatchbook prior to initialization; attempted to call method '" + b + "'")
				})
			} else this.each(function () {
				c ? c._init() : c = a.data(this, "swatchbook", new a.SwatchBook(b, this))
			});
			return c
		}
	}(jQuery, window), jQuery(document).ready(function (a) {
		a(".cq-accordion").each(function () {
			a(this), a(this).find("li").each(function () {
				a(this).find("i").css("margin-top", .5 * (a(this).outerHeight() - 9))
			})
		}), a(".ult-tabto-accordion").each(function () {
			a(this);
			var b = a(this).data("titlebg"),
				c = a(this).data("titlecolor"),
				d = a(this).data("titlehoverbg"),
				e = a(this).data("titlehovercolor"),
				f = a(this).data("activetitle"),
				g = a(this).data("activeicon"),
				h = a(this).data("scroll"),
				i = a(this).data("activebg");
			if ("" == g) var g = a(this).find(".aio-icon").data("iconhover");
			a(this).find(".ult-tabto-actitle").each(function () {
				var f = a(this).find(".aio-icon").data("iconcolor"),
					g = a(this).find(".aio-icon").data("iconhover");
				a(this).css("background-color", b).on("mouseover", function () {
					a(this).hasClass("ult-tabto-actitleActive") || (a(this).css({
						"background-color": d,
						color: e
					}), a(this).find(".aio-icon").css({
						color: g
					}))
				}).on("mouseleave", function () {
					a(this).hasClass("ult-tabto-actitleActive") || a(this).css({
						"background-color": b,
						color: c
					});
					var d = a(this).hasClass("ult-tabto-actitleActive");
					1 == d || a(this).find(".aio-icon").css({
						color: f
					})
				})
			}), a(this).on("click", function (b) {
				var c;
				if (c = a(b.target).is("i") ? a(b.target).parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
					var d = c.parent().next(),
						e = c.parents(".ult-tabto-accordion").data("animation");
					d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function () {
						var a = jQuery(this).find(".aio-icon").data("iconcolor"),
							b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
							c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
						jQuery(this).css({
							background: b,
							color: c
						}), jQuery(this).find(".aio-icon").css({
							color: a
						})
					}), c.css({
						color: f,
						"background-color": i
					}), c.find(".aio-icon").css({
						color: g
					});
					c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
					"Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
				} else if (c = a(b.target).is("span.ult-span-text.ult_acordian-text") ? a(b.target).parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
					var d = c.parent().next(),
						e = c.parents(".ult-tabto-accordion").data("animation");
					d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function () {
						var a = jQuery(this).find(".aio-icon").data("iconcolor"),
							b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
							c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
						jQuery(this).css({
							background: b,
							color: c
						}), jQuery(this).find(".aio-icon").css({
							color: a
						})
					});
					c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
					c.css({
						color: f,
						"background-color": i
					}), c.find(".aio-icon").css({
						color: g
					}), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
				} else if (c = a(b.target).is("i") ? a(b.target).parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
					var d = c.parent().next(),
						e = c.parents(".ult-tabto-accordion").data("animation");
					console.log("3"), d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function () {
						var a = jQuery(this).find(".aio-icon").data("iconcolor"),
							b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
							c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
						jQuery(this).css({
							background: b,
							color: c
						}), jQuery(this).find(".aio-icon").css({
							color: a
						})
					});
					c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
					c.css({
						color: f,
						"background-color": i
					}), c.find(".aio-icon").css({
						color: g
					}), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"),
						d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
				} else if (c = a(b.target).is("i") ? a(b.target).parent().parent().parent() : a(b.target), c.hasClass("ult-tabto-actitle")) {
					var d = c.parent().next(),
						e = c.parents(".ult-tabto-accordion").data("animation");
					console.log("4"), d.nextAll("dd").hasClass("cq-animateIn") && d.nextAll("dd").removeClass("cq-animateIn").addClass(" cq-animateOut ult-tabto-accolapsed"), d.prevAll("dd").hasClass("cq-animateIn") && d.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"), d.nextAll("dd").hasClass("ult-ac-slidedown") && d.nextAll("dd").removeClass("ult-ac-slidedown").addClass(" ult-ac-slideup ult-tabto-accolapsed"), d.prevAll("dd").hasClass("ult-ac-slidedown") && d.prevAll("dd").removeClass("ult-ac-slidedown").addClass("ult-tabto-accolapsed"), d.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.prevAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), d.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") && d.nextAll("dt").find(".ult-tabto-actitle").removeClass("ult-tabto-actitleActive").addClass("ult-acc-normal"), c.removeClass("ult-acc-normal"), jQuery(this).find(".ult-acc-normal").each(function () {
						var a = jQuery(this).find(".aio-icon").data("iconcolor"),
							b = (jQuery(this).find(".aio-icon").data("iconhover"), jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
							c = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
						jQuery(this).css({
							background: b,
							color: c
						}), jQuery(this).find(".aio-icon").css({
							color: a
						})
					});
					c.find(".aio-icon").data("iconcolor"), c.find(".aio-icon").data("iconhover");
					c.css({
						color: f,
						"background-color": i
					}), c.find(".aio-icon").css({
						color: g
					}), "Fade" == e ? (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("cq-animateOut") && d.removeClass("cq-animateOut"), d.addClass("cq-animateIn")) : (d.removeClass("cq-animateIn"), d.addClass("cq-animateOut")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()) : (c.toggleClass("ult-tabto-actitleActive"), d.hasClass("ult-tabto-accolapsed") ? (d.hasClass("ult-ac-slideup") && d.removeClass("ult-ac-slideup"), d.addClass("ult-ac-slidedown")) : (d.removeClass("ult-ac-slidedown"), d.addClass("ult-ac-slideup")), d.toggleClass("ult-tabto-accolapsed"), b.preventDefault()), d.hasClass("ult-tabto-accolapsed") && c.removeClass("ult-tabto-actitleActive")
				}
				"on" == h && jQuery("html, body").animate({
					scrollTop: a(this).offset().top - 100
				}, 1200)
			})
		})
	}), jQuery(document).ready(function (a) {
		a(".ult_tabs").each(function () {
			function b() {
				clearTimeout(q), o++, o > j - 1 && (o = 0), q = setTimeout(function () {
					c.find("ul.ult_tabmenu li.ult_tab_li").each(function (b) {
						o == b && a(this).find("a.ult_a").trigger("click")
					})
				}, 1e3 * i)
			}
			var c = a(this),
				d = a(this).data("tabsstyle"),
				e = a(this).data("titlecolor"),
				f = a(this).data("titlebg"),
				g = a(this).data("titlehovercolor"),
				h = a(this).data("titlehoverbg"),
				i = parseInt(a(this).data("rotatetabs")),
				j = a(this).find("ul.ult_tabmenu li.ult_tab_li").length,
				k = a(this).data("activetitle"),
				l = a(this).data("activeicon"),
				m = a(this).data("activebg"),
				n = parseInt(a(this).find(".ult_tabcontent").outerWidth()),
				o = 0,
				p = [];
			p.push(0), a(this).find("ul.ult_tabmenu").addClass("active").find("> li.ult_tab_li:eq(0)").addClass("current"), a(this).find("ul.ult_tabmenu li.ult_tab_li").each(function (b) {
				var c = a(this).data("iconhover"),
					i = a(this).data("iconcolor");
				"" == l && (l = c), 0 == b && ("style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
					background: m,
					color: k
				}), a(this).find(".ult_tab_icon").css({
					color: l
				})) : (a(this).find("a.ult_a").css({
					color: k
				}), a(this).css({
					background: m,
					color: k
				}), a(this).find(".ult_tab_icon").css({
					color: k
				}))), a(this).on("mouseover", function () {
					a(this).hasClass("current") || (a(this).hasClass("current") || "style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
						background: h,
						color: g
					}), a(this).find(".ult_tab_icon").css({
						color: c
					})) : (a(this).find("a.ult_a").css({
						color: g
					}), a(this).css({
						background: h,
						color: g
					}), a(this).find("a.ult_a").find(".ult_tab_icon").css({
						color: c
					})))
				}).on("mouseleave", function () {
					a(this).hasClass("current") || ("style2" == d || "style1" == d ? (a(this).find("a.ult_a").css({
						background: f,
						color: e
					}), a(this).find(".ult_tab_icon").css({
						color: i
					})) : (a(this).find("a.ult_a").css({
						color: e
					}), a(this).css({
						background: f,
						color: e
					}), a(this).find("a.ult_a").find(".ult_tab_icon").css({
						color: i
					})))
				})
			}), a(this).find("ul.ult_tabmenu li a.ult_a").click(function (c) {
				var g = a(this).closest(".ult_tabs"),
					h = a(this).closest("li.ult_tab_li").index(),
					j = a(this).parent().data("iconcolor");
				a(this).parent().data("iconhover");
				p.push(h);
				var q = (p[p.length - 1], p[p.length - 2]),
					r = a(this).closest(".ult_tabs").data("animation");
				g.find("ul.ult_tabmenu > li.ult_tab_li").removeClass("current"), "style2" == d || "style1" == d ? (g.find("ul.ult_tabmenu > li.ult_tab_li").find("a").css({
					background: f,
					color: e
				}), g.find("ul.ult_tabmenu > li.ult_tab_li").find(".ult_tab_icon").css({
					color: j
				})) : (g.find("ul.ult_tabmenu > li.ult_tab_li").find("a.ult_a").css({
					color: e
				}), g.find("ul.ult_tabmenu > li.ult_tab_li").css({
					background: f,
					color: e
				}));
				var s = a(this).closest("li.ult_tab_li").addClass("current");
				"Slide" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").stop().slideUp(500, function () {
					i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").stop().slideDown(500, function () {}), o = h, c.preventDefault()) : "Fade" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(100, function () {
					i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(1200), o = h, c.preventDefault()) : "Scale" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(100, function () {
					i > 0 && b(), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").addClass("scaleTabname"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass("scaleTabname2")
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(300, function () {
					g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass("scaleTabname"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("scaleTabname2")
				}), o = h, c.preventDefault()) : "Slide-Zoom" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlide-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").removeClass("ult_owl-backSlideright-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").fadeOut(200, function () {
					g.find(".ult_tabcontent").find("div.ult_tab_min_contain").addClass("ult_owl-origin"), h < q ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlide-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").addClass("ult_owl-backSlide-out")) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").addClass("ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlideright-out"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").addClass("ult_owl-backSlideright-out")), i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").fadeIn(1500, function () {
					g.find(".ult_tabcontent").find("div.ult_tab_min_contain").removeClass("ult_owl-origin"), h < q ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").removeClass(" ult_owl-backSlide-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlide-out")) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + q + ")").removeClass(" ult_owl-backSlideright-in"), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").removeClass(" ult_owl-backSlideright-out"))
				}), o = h, c.preventDefault()) : "Slide-Horizontal" == r ? ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), j = g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").hasClass("ult_active_tabnme"), 0 == j ? (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").hide(10, function () {
					jQuery(this).addClass("ult_active_tabnme"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").removeClass("ult_active_tabnme"), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").hide(10), h > q ? jQuery(this).animate({
						left: "-" + n + "px"
					}, 10) : jQuery(this).animate({
						left: "" + n + "px"
					}, 10), i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").show(100, function () {
					jQuery(this).animate({
						left: "0px"
					}, 800)
				}), o = h, c.preventDefault()) : (g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").animate({
					opacity: 1
				}, 1, function () {
					i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").animate({
					opacity: 1
				}, 1, function () {}), o = h, c.preventDefault())) : ("style2" == d || "style1" == d ? (s.find("a.ult_a").css({
					background: m,
					color: k
				}), s.find(".ult_tab_icon").css({
					color: l
				})) : (s.find("a.ult_a").css({
					color: k
				}), s.css({
					background: m,
					color: k
				})), g.find(".ult_tabcontent").find("div.ult_tabitemname").not("div.ult_tabitemname:eq(" + h + ")").hide(1, function () {
					i > 0 && b()
				}), g.find(".ult_tabcontent").find("div.ult_tabitemname:eq(" + h + ")").show(10), o = h, c.preventDefault())
			});
			var q = 0;
			i > 0 && b()
		})
	}), jQuery(document).ready(function (a) {
		a(this).find("ul.ult_tabmenu li a.ult_a").click(function (b) {
			a(document).trigger("ultAdvancedTabClicked", a(this)), jQuery("html,body").stop(), a(this).closest("li.ult_tab_li").siblings().each(function (b, c) {
				var d = a(this).data("iconcolor");
				a(this).find(".ult_tab_icon").css({
					color: d
				})
			})
		}), a(document).on("ultAdvancedTabClicked", function (a, b) {
			"function" == typeof wpb_prepare_tab_content && wpb_prepare_tab_content(a, {
				newPanel: jQuery(".ult_tabcontent")
			})
		})
	}), jQuery(document).ready(function () {
		setmytime(), jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function (a) {
			var b = jQuery(this).closest(".ult_tabs").data("animation");
			if (j = jQuery(this).closest("li.ult_tab_li").index(), "Fade" == b) {
				var c = jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq(" + j + ")").outerHeight();
				jQuery(this).closest(".ult_tabs").find(".ult_tabitemname").css({
					position: "absolute",
					left: "0",
					right: "0"
				}), jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({
					height: c
				}, "slow")
			}
			if ("Slide-Horizontal" == b) {
				var c = jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname:eq(" + j + ")").outerHeight();
				jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").css({
					overflow: "hidden"
				}), jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate({
					height: c
				}, "slow")
			}
		})
	}), jQuery(document).ready(function () {
		jQuery(this).find("ul.ult_tabmenu li a.ult_a").click(function (a) {
			jQuery(".slick-slider").parents(".ult_tabitemname").length && setTimeout(function () {
				jQuery(".slick-slider").slick("setPosition"), jQuery(window).trigger("resize")
			}, 200)
		}), jQuery(".vc_toggle").parents(".ult_tabs") && jQuery(".vc_toggle").click(function () {
			jQuery(this).parents(".ult_tabitemname").height();
			jQuery(this).find(".vc_toggle_content").toggleClass("vc_toggle_for_tab"), jQuery(this).find(".vc_toggle_content").hasClass("vc_toggle_for_tab") ? setTimeout(function () {
				var a = jQuery(".ult_tabitemname").height();
				jQuery(".ult_tabcontent").animate({
					height: a
				}, 100)
			}, 100) : setTimeout(function () {
				var a = jQuery(".vc_toggle").parents(".ult_tabitemname").height();
				jQuery(".ult_tabcontent").animate({
					height: a
				}, 100)
			}, 200)
		})
	}), jQuery(document).ready(function () {
		function a() {
			jQuery(".ult-team-member-wrap").each(function (a) {
				var b = jQuery(this).data("responsive_width");
				"" != b && (jQuery(window).width() <= b ? (jQuery(this).removeClass("ult-style-2"), jQuery(this).addClass("ult-style-1 ult-responsive")) : jQuery(this).hasClass("ult-responsive") && (jQuery(this).removeClass("ult-style-1 ult-responsive"), jQuery(this).addClass("ult-style-2")))
			})
		}

		function b() {
			jQuery(".ult-team-member-wrap").each(function (a) {
				var b = jQuery(this).height(),
					c = jQuery(this).find(".ult-team_description_slide"),
					d = c;
				parseFloat(b) < parseFloat(d.height()) ? d.addClass("ult-desc-set-top") : d.hasClass("ult-desc-set-top") && d.removeClass("ult-desc-set-top")
			}), jQuery(".ult-style-3 .ult-team-member-image").each(function (a) {
				var b = jQuery(this).height(),
					c = jQuery(this).find(".ult-team-member-description"),
					d = c;
				parseFloat(b) < parseFloat(d.height()) ? d.addClass("ult-desc-set-top") : d.hasClass("ult-desc-set-top") && d.removeClass("ult-desc-set-top")
			})
		}
		jQuery(".ult-team.ult-social-icon").hover(function () {
			var a = (jQuery(this).data("iconcolor"), jQuery(this).data("iconhover"));
			"inherit" != a ? jQuery(this).css("color", a) : jQuery(this).css("color", "")
		}, function () {
			var a = jQuery(this).data("iconcolor");
			jQuery(this).data("iconhover");
			"inherit" != a ? jQuery(this).css("color", a) : jQuery(this).css("color", "")
		}), jQuery(".ult-style-2").hover(function () {
			var a = jQuery(this).find(" .ult-team-member-image").first(),
				b = a.data("hover_opacity");
			a.children("img").css("opacity", b)
		}, function () {
			var a = jQuery(this).find(" .ult-team-member-image").first(),
				b = a.data("opacity");
			a.children("img").css("opacity", b)
		}), jQuery(".ult-style-3").hover(function () {
			var a = jQuery(this).find(" .ult-team-member-image").first(),
				b = a.data("hover_opacity");
			a.find("img").css("opacity", b)
		}, function () {
			var a = jQuery(this).find(" .ult-team-member-image").first();
			a.find("img").css("opacity", 1)
		}), a(), setTimeout(b, 500), jQuery(".ult-team-member-wrap .ult-team-member-image img").load(function () {
			b()
		}), jQuery(window).resize(function () {
			a(), b()
		}), jQuery(".ult-team-member-image-overlay.ult-team_img_hover").each(function () {
			var a = jQuery(this).data("background_clr");
			jQuery(this).css({
				"background-color": a
			})
		})
	}), + function (a) {
		"use strict";
		var b = function (a, b) {
			this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("bsf_tooltip", a, b)
		};
		b.DEFAULTS = {
			animation: !0,
			placement: "top",
			selector: !1,
			template: '<div class="bsf_tooltip"><div class="bsf_tooltip-arrow"></div><div class="bsf_tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			container: !1
		}, b.prototype.init = function (b, c, d) {
			this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
			for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
				var g = e[f];
				if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
				else if ("manual" != g) {
					var h = "hover" == g ? "mouseenter" : "focusin",
						i = "hover" == g ? "mouseleave" : "focusout";
					this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
				}
			}
			this.options.selector ? this._options = a.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		}, b.prototype.getDefaults = function () {
			return b.DEFAULTS
		}, b.prototype.getOptions = function (b) {
			return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
				show: b.delay,
				hide: b.delay
			}), b
		}, b.prototype.getDelegateOptions = function () {
			var b = {},
				c = this.getDefaults();
			return this._options && a.each(this._options, function (a, d) {
				c[a] != d && (b[a] = d)
			}), b
		}, b.prototype.enter = function (b) {
			var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
			return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
				"in" == c.hoverState && c.show()
			}, c.options.delay.show)) : c.show()
		}, b.prototype.leave = function (b) {
			var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
			return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
				"out" == c.hoverState && c.hide()
			}, c.options.delay.hide)) : c.hide()
		}, b.prototype.show = function () {
			var b = a.Event("show.bs." + this.type);
			if (this.hasContent() && this.enabled) {
				if (this.$element.trigger(b), b.isDefaultPrevented()) return;
				var c = this,
					d = this.tip();
				this.setContent(), this.options.animation && d.addClass("fade");
				var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
					f = /\s?auto?\s?/i,
					g = f.test(e);
				g && (e = e.replace(f, "") || "top"), d.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
				var h = this.getPosition(),
					i = d[0].offsetWidth,
					j = d[0].offsetHeight;
				if (g) {
					var k = this.$element.parent(),
						l = e,
						m = document.documentElement.scrollTop || document.body.scrollTop,
						n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
						o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
						p = "body" == this.options.container ? 0 : k.offset().left;
					e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
				}
				var q = this.getCalculatedOffset(e, h, i, j);
				this.applyPlacement(q, e), this.hoverState = null;
				var r = function () {
					c.$element.trigger("shown.bs." + c.type)
				};
				a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
			}
		}, b.prototype.applyPlacement = function (b, c) {
			var d, e = this.tip(),
				f = e[0].offsetWidth,
				g = e[0].offsetHeight,
				h = parseInt(e.css("margin-top"), 10),
				i = parseInt(e.css("margin-left"), 10);
			isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
				using: function (a) {
					e.css({
						top: Math.round(a.top),
						left: Math.round(a.left)
					})
				}
			}, b), 0), e.addClass("in");
			var j = e[0].offsetWidth,
				k = e[0].offsetHeight;
			if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
				var l = 0;
				b.left < 0 && (l = b.left * -2, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
			} else this.replaceArrow(k - g, k, "top");
			d && e.offset(b)
		}, b.prototype.replaceArrow = function (a, b, c) {
			this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
		}, b.prototype.setContent = function () {
			var a = this.tip(),
				b = this.getTitle();
			a.find(".bsf_tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
		}, b.prototype.hide = function () {
			function b() {
				"in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
			}
			var c = this,
				d = this.tip(),
				e = a.Event("hide.bs." + this.type);
			if (this.$element.trigger(e), !e.isDefaultPrevented()) return d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this
		}, b.prototype.fixTitle = function () {
			var a = this.$element;
			(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
		}, b.prototype.hasContent = function () {
			return this.getTitle()
		}, b.prototype.getPosition = function () {
			var b = this.$element[0];
			return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
				width: b.offsetWidth,
				height: b.offsetHeight
			}, this.$element.offset())
		}, b.prototype.getCalculatedOffset = function (a, b, c, d) {
			return "bottom" == a ? {
				top: b.top + b.height,
				left: b.left + b.width / 2 - c / 2
			} : "top" == a ? {
				top: b.top - d,
				left: b.left + b.width / 2 - c / 2
			} : "left" == a ? {
				top: b.top + b.height / 2 - d / 2,
				left: b.left - c
			} : {
				top: b.top + b.height / 2 - d / 2,
				left: b.left + b.width
			}
		}, b.prototype.getTitle = function () {
			var a, b = this.$element,
				c = this.options;
			return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
		}, b.prototype.tip = function () {
			return this.$tip = this.$tip || a(this.options.template)
		}, b.prototype.arrow = function () {
			return this.$arrow = this.$arrow || this.tip().find(".bsf_tooltip-arrow")
		}, b.prototype.validate = function () {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		}, b.prototype.enable = function () {
			this.enabled = !0
		}, b.prototype.disable = function () {
			this.enabled = !1
		}, b.prototype.toggleEnabled = function () {
			this.enabled = !this.enabled
		}, b.prototype.toggle = function (b) {
			var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
			c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
		}, b.prototype.destroy = function () {
			clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
		};
		var c = a.fn.bsf_tooltip;
		a.fn.bsf_tooltip = function (c) {
			return this.each(function () {
				var d = a(this),
					e = d.data("bs.bsf_tooltip"),
					f = "object" == typeof c && c;
				(e || "destroy" != c) && (e || d.data("bs.bsf_tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
			})
		}, a.fn.bsf_tooltip.Constructor = b, a.fn.bsf_tooltip.noConflict = function () {
			return a.fn.bsf_tooltip = c, this
		}
	}(jQuery), ! function (a) {
		"use strict";
		var b = function (b, c) {
			this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.baseText = this.el.text() || this.el.attr("placeholder") || "", this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.showCursor = !this.isInput && this.options.showCursor, this.cursorChar = this.options.cursorChar, this.isInput = this.el.is("input"), this.attr = this.options.attr || (this.isInput ? "placeholder" : null), this.build()
		};
		b.prototype = {
			constructor: b,
			init: function () {
				var a = this;
				a.timeout = setTimeout(function () {
					a.typewrite(a.strings[a.arrayPos], a.strPos)
				}, a.startDelay)
			},
			build: function () {
				this.showCursor === !0 && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), 0 == this.el.parent().find(".typed-cursor").length && this.el.after(this.cursor)), this.init()
			},
			typewrite: function (a, b) {
				if (this.stop !== !0) {
					var c = Math.round(70 * Math.random()) + this.typeSpeed,
						d = this;
					d.timeout = setTimeout(function () {
						var c = 0,
							e = a.substr(b);
						if ("^" === e.charAt(0)) {
							var f = 1;
							/^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
						}
						d.timeout = setTimeout(function () {
							if (b === a.length) {
								if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, d.loop === !1 || d.curLoop === d.loopCount)) return;
								d.timeout = setTimeout(function () {
									d.backspace(a, b)
								}, d.backDelay)
							} else {
								0 === b && d.options.preStringTyped(d.arrayPos);
								var c = d.baseText + a.substr(0, b + 1);
								d.attr ? d.el.attr(d.attr, c) : d.el.text(c), b++, d.typewrite(a, b)
							}
						}, c)
					}, c)
				}
			},
			backspace: function (a, b) {
				if (this.stop !== !0) {
					var c = Math.round(70 * Math.random()) + this.backSpeed,
						d = this;
					d.timeout = setTimeout(function () {
						var c = d.baseText + a.substr(0, b);
						d.attr ? d.el.attr(d.attr, c) : d.el.text(c), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.init()) : d.typewrite(d.strings[d.arrayPos], b))
					}, c)
				}
			},
			reset: function () {
				var a = this;
				clearInterval(a.timeout);
				var b = this.el.attr("id");
				this.el.after('<span id="' + b + '"/>'), this.el.remove(), this.cursor.remove(), a.options.resetCallback()
			}
		}, a.fn.typed = function (c) {
			return this.each(function () {
				var d = a(this),
					e = d.data("typed"),
					f = "object" == typeof c && c;
				e || d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
			})
		}, a.fn.typed.defaults = {
			strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
			typeSpeed: 0,
			startDelay: 0,
			backSpeed: 0,
			backDelay: 500,
			loop: !1,
			loopCount: !1,
			showCursor: !0,
			cursorChar: "|",
			attr: null,
			callback: function () {},
			preStringTyped: function () {},
			onStringTyped: function () {},
			resetCallback: function () {}
		}
	}(window.jQuery), jQuery(document).ready(function (a) {
		var b = "",
			c = "",
			d = "",
			e = "",
			f = "",
			g = "";
		jQuery(".ult-responsive").each(function (h, i) {
			var j = jQuery(this),
				k = j.attr("data-responsive-json-new"),
				l = j.data("ultimate-target"),
				m = "",
				n = "",
				o = "",
				p = "",
				q = "",
				r = "";
			"undefined" == typeof k && null == k || a.each(a.parseJSON(k), function (a, b) {
				var c = a;
				if ("undefined" != typeof b && null != b) {
					var d = b.split(";");
					jQuery.each(d, function (a, b) {
						if ("undefined" != typeof b || null != b) {
							var d = b.split(":");
							switch (d[0]) {
								case "large_screen":
									m += c + ":" + d[1] + ";";
									break;
								case "desktop":
									n += c + ":" + d[1] + ";";
									break;
								case "tablet":
									o += c + ":" + d[1] + ";";
									break;
								case "tablet_portrait":
									p += c + ":" + d[1] + ";";
									break;
								case "mobile_landscape":
									q += c + ":" + d[1] + ";";
									break;
								case "mobile":
									r += c + ":" + d[1] + ";"
							}
						}
					})
				}
			}), "" != r && (g += l + "{" + r + "}"), "" != q && (f += l + "{" + q + "}"), "" != p && (e += l + "{" + p + "}"), "" != o && (d += l + "{" + o + "}"), "" != n && (c += l + "{" + n + "}"), "" != m && (b += l + "{" + m + "}")
		});
		var h = "<style>/** Ultimate: Media Responsive **/ ";
		h += c, h += "@media (max-width: 1199px) { " + d + "}", h += "@media (max-width: 991px)  { " + e + "}", h += "@media (max-width: 767px)  { " + f + "}", h += "@media (max-width: 479px)  { " + g + "}", h += "/** Ultimate: Media Responsive - **/</style>", jQuery("head").append(h)
	}),
	function (a) {
		a(document).ready(function () {
			var b = "";
			a(".ult-video-banner").each(function (c, d) {
				var e = a(d).attr("id"),
					f = a(d).data("current-time"),
					g = (a(d).data("placeholder"), 0);
				a(d).find("video").get(0).addEventListener("canplay", function () {
					return !(g >= 1) && (a(d).find("video").get(0).currentTime = f, a(d).find("video").get(0).pause(), void g++)
				});
				var h = a(d).find(".ult-video-banner-overlay").data("overlay"),
					i = a(d).find(".ult-video-banner-overlay").data("overlay-hover");
				"" != h && (b += "#" + e + " .ult-video-banner-overlay { background:" + h + " }"), "" != i && (b += "#" + e + ".ult-vb-touch-start .ult-video-banner-overlay { background:" + i + " }")
			}), "" != b && a("head").append("<style>" + b + "</style>"), a(document).on("mouseover", ".ult-video-banner", function () {
				a(this).addClass("ult-vb-touch-start"), a(this).find("video").get(0).play()
			}), a(document).on("mouseout", ".ult-video-banner", function () {
				a(this).removeClass("ult-vb-touch-start"), a(this).find("video").get(0).pause()
			}), a(document).on("touchstart", ".ult-video-banner", function () {
				return a(this).hasClass("ult-vb-touch-start") ? (a(this).removeClass("ult-vb-touch-start"), a(this).find("video").get(0).pause(), !1) : (a(this).addClass("ult-vb-touch-start"), void a(this).find("video").get(0).play())
			})
		})
	}(jQuery),
	function (a) {
		var b = {
				speed: 700,
				pause: 4e3,
				showItems: 1,
				mousePause: !0,
				height: 0,
				animate: !0,
				margin: 0,
				padding: 0,
				startPaused: !1
			},
			c = {
				moveUp: function (a, b) {
					c.animate(a, b, "up")
				},
				moveDown: function (a, b) {
					c.animate(a, b, "down")
				},
				animate: function (b, c, d) {
					var e = b.itemHeight,
						f = b.options,
						g = b.element,
						h = g.children("ul"),
						i = "up" === d ? "li:first" : "li:last";
					g.trigger("vticker.beforeTick");
					var j = h.children(i).clone(!0);
					if (f.height > 0 && (e = h.children("li:first").height()), e += f.margin + 2 * f.padding, "down" === d && h.css("top", "-" + e + "px").prepend(j), c && c.animate) {
						if (b.animating) return;
						b.animating = !0;
						var k = "up" === d ? {
							top: "-=" + e + "px"
						} : {
							top: 0
						};
						h.animate(k, f.speed, function () {
							a(h).children(i).remove(), a(h).css("top", "0px"), b.animating = !1, g.trigger("vticker.afterTick")
						})
					} else h.children(i).remove(), h.css("top", "0px"), g.trigger("vticker.afterTick");
					"up" === d && j.appendTo(h)
				},
				nextUsePause: function () {
					var b = a(this).data("state"),
						c = b.options;
					b.isPaused || b.itemCount < 2 || d.next.call(this, {
						animate: c.animate
					})
				},
				startInterval: function () {
					var b = a(this).data("state"),
						d = b.options,
						e = this;
					b.intervalId = setInterval(function () {
						c.nextUsePause.call(e)
					}, d.pause)
				},
				stopInterval: function () {
					var b = a(this).data("state");
					b && (b.intervalId && clearInterval(b.intervalId), b.intervalId = void 0)
				},
				restartInterval: function () {
					c.stopInterval.call(this), c.startInterval.call(this)
				}
			},
			d = {
				init: function (e) {
					d.stop.call(this);
					var f = jQuery.extend({}, b),
						e = a.extend(f, e),
						g = a(this),
						h = {
							itemCount: g.children("ul").children("li").length,
							itemHeight: 0,
							itemMargin: 0,
							element: g,
							animating: !1,
							options: e,
							isPaused: !!e.startPaused,
							pausedByCode: !1
						};
					if (a(this).data("state", h), g.css({
							overflow: "hidden",
							position: "relative"
						}).children("ul").css({
							position: "absolute",
							margin: 0,
							padding: 0
						}).children("li").css({
							margin: e.margin,
							padding: e.padding
						}), isNaN(e.height) || 0 === e.height) {
						g.children("ul").children("li").each(function () {
							var b = a(this);
							b.height() > h.itemHeight && (h.itemHeight = b.height())
						}), g.children("ul").children("li").each(function () {
							var b = a(this);
							b.height(h.itemHeight)
						});
						var i = e.margin + 2 * e.padding;
						g.height((h.itemHeight + i) * e.showItems + e.margin)
					} else g.height(e.height);
					var j = this;
					e.startPaused || c.startInterval.call(j), e.mousePause && g.bind("mouseenter", function () {
						h.isPaused !== !0 && (h.pausedByCode = !0, c.stopInterval.call(j), d.pause.call(j, !0))
					}).bind("mouseleave", function () {
						(h.isPaused !== !0 || h.pausedByCode) && (h.pausedByCode = !1, d.pause.call(j, !1), c.startInterval.call(j))
					})
				},
				pause: function (b) {
					var c = a(this).data("state");
					if (c) {
						if (c.itemCount < 2) return !1;
						c.isPaused = b;
						var d = c.element;
						b ? (a(this).addClass("paused"), d.trigger("vticker.pause")) : (a(this).removeClass("paused"), d.trigger("vticker.resume"))
					}
				},
				next: function (b) {
					var d = a(this).data("state");
					if (d) {
						if (d.animating || d.itemCount < 2) return !1;
						c.restartInterval.call(this), c.moveUp(d, b)
					}
				},
				prev: function (b) {
					var d = a(this).data("state");
					if (d) {
						if (d.animating || d.itemCount < 2) return !1;
						c.restartInterval.call(this), c.moveDown(d, b)
					}
				},
				stop: function () {
					var b = a(this).data("state");
					b && c.stopInterval.call(this)
				},
				remove: function () {
					var b = a(this).data("state");
					if (b) {
						c.stopInterval.call(this);
						var d = b.element;
						d.unbind(), d.remove()
					}
				}
			};
		a.fn.vTicker = function (b) {
			return d[b] ? d[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.vTicker") : d.init.apply(this, arguments)
		}
	}(jQuery);
(function ($) {
	'use strict';
	if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
		return;
	}
	wpcf7 = $.extend({
		cached: 0,
		inputs: []
	}, wpcf7);
	$(function () {
		wpcf7.supportHtml5 = (function () {
			var features = {};
			var input = document.createElement('input');
			features.placeholder = 'placeholder' in input;
			var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
			$.each(inputTypes, function (index, value) {
				input.setAttribute('type', value);
				features[value] = input.type !== 'text';
			});
			return features;
		})();
		$('div.wpcf7 > form').each(function () {
			var $form = $(this);
			wpcf7.initForm($form);
			if (wpcf7.cached) {
				wpcf7.refill($form);
			}
		});
	});
	wpcf7.getId = function (form) {
		return parseInt($('input[name="_wpcf7"]', form).val(), 10);
	};
	wpcf7.initForm = function (form) {
		var $form = $(form);
		$form.submit(function (event) {
			if (!wpcf7.supportHtml5.placeholder) {
				$('[placeholder].placeheld', $form).each(function (i, n) {
					$(n).val('').removeClass('placeheld');
				});
			}
			if (typeof window.FormData === 'function') {
				wpcf7.submit($form);
				event.preventDefault();
			}
		});
		$('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
		wpcf7.toggleSubmit($form);
		$form.on('click', '.wpcf7-acceptance', function () {
			wpcf7.toggleSubmit($form);
		});
		$('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
			var name = $(this).attr('name');
			$form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
		});
		$('.wpcf7-list-item.has-free-text', $form).each(function () {
			var $freetext = $(':input.wpcf7-free-text', this);
			var $wrap = $(this).closest('.wpcf7-form-control');
			if ($(':checkbox, :radio', this).is(':checked')) {
				$freetext.prop('disabled', false);
			} else {
				$freetext.prop('disabled', true);
			}
			$wrap.on('change', ':checkbox, :radio', function () {
				var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
				if ($cb.is(':checked')) {
					$freetext.prop('disabled', false).focus();
				} else {
					$freetext.prop('disabled', true);
				}
			});
		});
		if (!wpcf7.supportHtml5.placeholder) {
			$('[placeholder]', $form).each(function () {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('placeheld');
				$(this).focus(function () {
					if ($(this).hasClass('placeheld')) {
						$(this).val('').removeClass('placeheld');
					}
				});
				$(this).blur(function () {
					if ('' === $(this).val()) {
						$(this).val($(this).attr('placeholder'));
						$(this).addClass('placeheld');
					}
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
			$form.find('input.wpcf7-date[type="date"]').each(function () {
				$(this).datepicker({
					dateFormat: 'yy-mm-dd',
					minDate: new Date($(this).attr('min')),
					maxDate: new Date($(this).attr('max'))
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
			$form.find('input.wpcf7-number[type="number"]').each(function () {
				$(this).spinner({
					min: $(this).attr('min'),
					max: $(this).attr('max'),
					step: $(this).attr('step')
				});
			});
		}
		$('.wpcf7-character-count', $form).each(function () {
			var $count = $(this);
			var name = $count.attr('data-target-name');
			var down = $count.hasClass('down');
			var starting = parseInt($count.attr('data-starting-value'), 10);
			var maximum = parseInt($count.attr('data-maximum-value'), 10);
			var minimum = parseInt($count.attr('data-minimum-value'), 10);
			var updateCount = function (target) {
				var $target = $(target);
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr('data-current-value', count);
				$count.text(count);
				if (maximum && maximum < length) {
					$count.addClass('too-long');
				} else {
					$count.removeClass('too-long');
				}
				if (minimum && length < minimum) {
					$count.addClass('too-short');
				} else {
					$count.removeClass('too-short');
				}
			};
			$(':input[name="' + name + '"]', $form).each(function () {
				updateCount(this);
				$(this).keyup(function () {
					updateCount(this);
				});
			});
		});
		$form.on('change', '.wpcf7-validates-as-url', function () {
			var val = $.trim($(this).val());
			if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
				val = val.replace(/^\/+/, '');
				val = 'http://' + val;
			}
			$(this).val(val);
		});
	};
	wpcf7.submit = function (form) {
		if (typeof window.FormData !== 'function') {
			return;
		}
		var $form = $(form);
		$('.ajax-loader', $form).addClass('is-active');
		wpcf7.clearResponse($form);
		var formData = new FormData($form.get(0));
		var detail = {
			id: $form.closest('div.wpcf7').attr('id'),
			status: 'init',
			inputs: [],
			formData: formData
		};
		$.each($form.serializeArray(), function (i, field) {
			if ('_wpcf7' == field.name) {
				detail.contactFormId = field.value;
			} else if ('_wpcf7_version' == field.name) {
				detail.pluginVersion = field.value;
			} else if ('_wpcf7_locale' == field.name) {
				detail.contactFormLocale = field.value;
			} else if ('_wpcf7_unit_tag' == field.name) {
				detail.unitTag = field.value;
			} else if ('_wpcf7_container_post' == field.name) {
				detail.containerPostId = field.value;
			} else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
				var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
				detail.inputs.push({
					name: owner + '-free-text',
					value: field.value
				});
			} else if (field.name.match(/^_/)) {} else {
				detail.inputs.push(field);
			}
		});
		wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
		var ajaxSuccess = function (data, status, xhr, $form) {
			detail.id = $(data.into).attr('id');
			detail.status = data.status;
			detail.apiResponse = data;
			var $message = $('.wpcf7-response-output', $form);
			switch (data.status) {
				case 'validation_failed':
					$.each(data.invalidFields, function (i, n) {
						$(n.into, $form).each(function () {
							wpcf7.notValidTip(this, n.message);
							$('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
							$('[aria-invalid]', this).attr('aria-invalid', 'true');
						});
					});
					$message.addClass('wpcf7-validation-errors');
					$form.addClass('invalid');
					wpcf7.triggerEvent(data.into, 'invalid', detail);
					break;
				case 'acceptance_missing':
					$message.addClass('wpcf7-acceptance-missing');
					$form.addClass('unaccepted');
					wpcf7.triggerEvent(data.into, 'unaccepted', detail);
					break;
				case 'spam':
					$message.addClass('wpcf7-spam-blocked');
					$form.addClass('spam');
					$('[name="g-recaptcha-response"]', $form).each(function () {
						if ('' === $(this).val()) {
							var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
							wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
						}
					});
					wpcf7.triggerEvent(data.into, 'spam', detail);
					break;
				case 'aborted':
					$message.addClass('wpcf7-aborted');
					$form.addClass('aborted');
					wpcf7.triggerEvent(data.into, 'aborted', detail);
					break;
				case 'mail_sent':
					$message.addClass('wpcf7-mail-sent-ok');
					$form.addClass('sent');
					wpcf7.triggerEvent(data.into, 'mailsent', detail);
					break;
				case 'mail_failed':
					$message.addClass('wpcf7-mail-sent-ng');
					$form.addClass('failed');
					wpcf7.triggerEvent(data.into, 'mailfailed', detail);
					break;
				default:
					var customStatusClass = 'custom-' +
						data.status.replace(/[^0-9a-z]+/i, '-');
					$message.addClass('wpcf7-' + customStatusClass);
					$form.addClass(customStatusClass);
			}
			wpcf7.refill($form, data);
			wpcf7.triggerEvent(data.into, 'submit', detail);
			if ('mail_sent' == data.status) {
				$form.each(function () {
					this.reset();
				});
				wpcf7.toggleSubmit($form);
			}
			if (!wpcf7.supportHtml5.placeholder) {
				$form.find('[placeholder].placeheld').each(function (i, n) {
					$(n).val($(n).attr('placeholder'));
				});
			}
			$message.html('').append(data.message).slideDown('fast');
			$message.attr('role', 'alert');
			$('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
				var $response = $(this);
				$response.html('').attr('role', '').append(data.message);
				if (data.invalidFields) {
					var $invalids = $('<ul></ul>');
					$.each(data.invalidFields, function (i, n) {
						if (n.idref) {
							var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
						} else {
							var $li = $('<li></li>').append(n.message);
						}
						$invalids.append($li);
					});
					$response.append($invalids);
				}
				$response.attr('role', 'alert').focus();
			});
		};
		$.ajax({
			type: 'POST',
			url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		}).done(function (data, status, xhr) {
			ajaxSuccess(data, status, xhr, $form);
			$('.ajax-loader', $form).removeClass('is-active');
		}).fail(function (xhr, status, error) {
			var $e = $('<div class="ajax-error"></div>').text(error.message);
			$form.after($e);
		});
	};
	wpcf7.triggerEvent = function (target, name, detail) {
		var $target = $(target);
		var event = new CustomEvent('wpcf7' + name, {
			bubbles: true,
			detail: detail
		});
		$target.get(0).dispatchEvent(event);
		$target.trigger('wpcf7:' + name, detail);
		$target.trigger(name + '.wpcf7', detail);
	};
	wpcf7.toggleSubmit = function (form, state) {
		var $form = $(form);
		var $submit = $('input:submit', $form);
		if (typeof state !== 'undefined') {
			$submit.prop('disabled', !state);
			return;
		}
		if ($form.hasClass('wpcf7-acceptance-as-validation')) {
			return;
		}
		$submit.prop('disabled', false);
		$('.wpcf7-acceptance', $form).each(function () {
			var $span = $(this);
			var $input = $('input:checkbox', $span);
			if (!$span.hasClass('optional')) {
				if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
					$submit.prop('disabled', true);
					return false;
				}
			}
		});
	};
	wpcf7.notValidTip = function (target, message) {
		var $target = $(target);
		$('.wpcf7-not-valid-tip', $target).remove();
		$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
		if ($target.is('.use-floating-validation-tip *')) {
			var fadeOut = function (target) {
				$(target).not(':hidden').animate({
					opacity: 0
				}, 'fast', function () {
					$(this).css({
						'z-index': -100
					});
				});
			};
			$target.on('mouseover', '.wpcf7-not-valid-tip', function () {
				fadeOut(this);
			});
			$target.on('focus', ':input', function () {
				fadeOut($('.wpcf7-not-valid-tip', $target));
			});
		}
	};
	wpcf7.refill = function (form, data) {
		var $form = $(form);
		var refillCaptcha = function ($form, items) {
			$.each(items, function (i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				$form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		};
		var refillQuiz = function ($form, items) {
			$.each(items, function (i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				$form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		};
		if (typeof data === 'undefined') {
			$.ajax({
				type: 'GET',
				url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
				beforeSend: function (xhr) {
					var nonce = $form.find(':input[name="_wpnonce"]').val();
					if (nonce) {
						xhr.setRequestHeader('X-WP-Nonce', nonce);
					}
				},
				dataType: 'json'
			}).done(function (data, status, xhr) {
				if (data.captcha) {
					refillCaptcha($form, data.captcha);
				}
				if (data.quiz) {
					refillQuiz($form, data.quiz);
				}
			});
		} else {
			if (data.captcha) {
				refillCaptcha($form, data.captcha);
			}
			if (data.quiz) {
				refillQuiz($form, data.quiz);
			}
		}
	};
	wpcf7.clearResponse = function (form) {
		var $form = $(form);
		$form.removeClass('invalid spam sent failed');
		$form.siblings('.screen-reader-response').html('').attr('role', '');
		$('.wpcf7-not-valid-tip', $form).remove();
		$('[aria-invalid]', $form).attr('aria-invalid', 'false');
		$('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
		$('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
	};
	wpcf7.apiSettings.getRoute = function (path) {
		var url = wpcf7.apiSettings.root;
		url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
		return url;
	};
})(jQuery);
(function () {
	if (typeof window.CustomEvent === "function") return false;

	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function () {
	"use strict";

	function e(e) {
		function t(t, n) {
			var s, h, k = t == window,
				y = n && n.message !== undefined ? n.message : undefined;
			if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
				if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
						fadeOut: 0
					}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
					var m = y.jquery ? y[0] : y,
						g = {};
					e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
				}
				e(t).data("blockUI.onUnblock", n.onUnblock);
				var v, I, w, U, x = n.baseZ;
				v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
				var C = [v, I, w],
					S = e(k ? "body" : t);
				e.each(C, function () {
					this.appendTo(S)
				}), n.theme && n.draggable && e.fn.draggable && w.draggable({
					handle: ".ui-dialog-titlebar",
					cancel: "li"
				});
				var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
				if (u || O) {
					if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
						T = a(t, "borderLeftWidth"),
						M = E ? "(0 - " + E + ")" : 0,
						B = T ? "(0 - " + T + ")" : 0;
					e.each(C, function (e, t) {
						var o = t[0].style;
						if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
						else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
						else if (!n.centerY && k) {
							var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
							o.setExpression("top", i)
						}
					})
				}
				if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
					var j = n.onBlock ? n.onBlock : c,
						H = n.showOverlay && !y ? j : c,
						z = y ? j : c;
					n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
				} else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
				if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
					var W = setTimeout(function () {
						k ? e.unblockUI(n) : e(t).unblock(n)
					}, n.timeout);
					e(t).data("blockUI.timeout", W)
				}
			}
		}

		function o(t, o) {
			var s, l = t == window,
				d = e(t),
				a = d.data("blockUI.history"),
				c = d.data("blockUI.timeout");
			c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
			var r;
			r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
				0 == --s && n(r, a, o, t)
			})) : n(r, a, o, t)
		}

		function n(t, o, n, i) {
			var s = e(i);
			if (!s.data("blockUI.isBlocked")) {
				t.each(function (e, t) {
					this.parentNode && this.parentNode.removeChild(this)
				}), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
				var l = e(document.body),
					d = l.width(),
					a = l[0].style.width;
				l.width(d - 1).width(d), l[0].style.width = a
			}
		}

		function i(t, o, n) {
			var i = o == window,
				l = e(o);
			if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
				var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
				t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
			}
		}

		function s(t) {
			if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
				var o = b,
					n = !t.shiftKey && t.target === o[o.length - 1],
					i = t.shiftKey && t.target === o[0];
				if (n || i) return setTimeout(function () {
					l(i)
				}, 10), !1
			}
			var s = t.data,
				d = e(t.target);
			return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
		}

		function l(e) {
			if (b) {
				var t = b[!0 === e ? b.length - 1 : 0];
				t && t.focus()
			}
		}

		function d(e, t, o) {
			var n = e.parentNode,
				i = e.style,
				s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
				l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
			t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
		}

		function a(t, o) {
			return parseInt(e.css(t, o), 10) || 0
		}
		e.fn._fadeIn = e.fn.fadeIn;
		var c = e.noop || function () {},
			r = /MSIE/.test(navigator.userAgent),
			u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
			f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
		e.blockUI = function (e) {
			t(window, e)
		}, e.unblockUI = function (e) {
			o(window, e)
		}, e.growlUI = function (t, o, n, i) {
			var s = e('<div class="growlUI"></div>');
			t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
			var l = function (t) {
				t = t || {}, e.blockUI({
					message: s,
					fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
					fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
					timeout: "undefined" != typeof t.timeout ? t.timeout : n,
					centerY: !1,
					showOverlay: !1,
					onUnblock: i,
					css: e.blockUI.defaults.growlCSS
				})
			};
			l();
			s.css("opacity");
			s.mouseover(function () {
				l({
					fadeIn: 0,
					timeout: 3e4
				});
				var t = e(".blockMsg");
				t.stop(), t.fadeTo(300, 1)
			}).mouseout(function () {
				e(".blockMsg").fadeOut(1e3)
			})
		}, e.fn.block = function (o) {
			if (this[0] === window) return e.blockUI(o), this;
			var n = e.extend({}, e.blockUI.defaults, o || {});
			return this.each(function () {
				var t = e(this);
				n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
					fadeOut: 0
				})
			}), this.each(function () {
				"static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
			})
		}, e.fn.unblock = function (t) {
			return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
				o(this, t)
			})
		}, e.blockUI.version = 2.7, e.blockUI.defaults = {
			message: "<h1>Please wait...</h1>",
			title: null,
			draggable: !0,
			theme: !1,
			css: {
				padding: 0,
				margin: 0,
				width: "30%",
				top: "40%",
				left: "35%",
				textAlign: "center",
				color: "#000",
				border: "3px solid #aaa",
				backgroundColor: "#fff",
				cursor: "wait"
			},
			themedCSS: {
				width: "30%",
				top: "40%",
				left: "35%"
			},
			overlayCSS: {
				backgroundColor: "#000",
				opacity: .6,
				cursor: "wait"
			},
			cursorReset: "default",
			growlCSS: {
				width: "350px",
				top: "10px",
				left: "",
				right: "10px",
				border: "none",
				padding: "5px",
				opacity: .6,
				cursor: "default",
				color: "#fff",
				backgroundColor: "#000",
				"-webkit-border-radius": "10px",
				"-moz-border-radius": "10px",
				"border-radius": "10px"
			},
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
			forceIframe: !1,
			baseZ: 1e3,
			centerX: !0,
			centerY: !0,
			allowBodyStretch: !0,
			bindEvents: !0,
			constrainTabKey: !0,
			fadeIn: 200,
			fadeOut: 400,
			timeout: 0,
			showOverlay: !0,
			focusInput: !0,
			focusableElements: ":input:enabled:visible",
			onBlock: null,
			onUnblock: null,
			onOverlayClick: null,
			quirksmodeOffsetHack: 4,
			blockMsgClass: "blockMsg",
			ignoreIfBlocked: !1
		};
		var p = null,
			b = []
	}
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function (e) {
	var n = !1;
	if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
		var o = window.Cookies,
			t = window.Cookies = e();
		t.noConflict = function () {
			return window.Cookies = o, t
		}
	}
}(function () {
	function e() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var o = arguments[e];
			for (var t in o) n[t] = o[t]
		}
		return n
	}

	function n(o) {
		function t(n, r, i) {
			var c;
			if ("undefined" != typeof document) {
				if (arguments.length > 1) {
					if ("number" == typeof (i = e({
							path: "/"
						}, t.defaults, i)).expires) {
						var a = new Date;
						a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
					}
					i.expires = i.expires ? i.expires.toUTCString() : "";
					try {
						c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
					} catch (m) {}
					r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
					var f = "";
					for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
					return document.cookie = n + "=" + r + f
				}
				n || (c = {});
				for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
					var l = p[u].split("="),
						C = l.slice(1).join("=");
					'"' === C.charAt(0) && (C = C.slice(1, -1));
					try {
						var g = l[0].replace(d, decodeURIComponent);
						if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
							C = JSON.parse(C)
						} catch (m) {}
						if (n === g) {
							c = C;
							break
						}
						n || (c[g] = C)
					} catch (m) {}
				}
				return c
			}
		}
		return t.set = t, t.get = function (e) {
			return t.call(t, e)
		}, t.getJSON = function () {
			return t.apply({
				json: !0
			}, [].slice.call(arguments))
		}, t.defaults = {}, t.remove = function (n, o) {
			t(n, "", e(o, {
				expires: -1
			}))
		}, t.withConverter = n, t
	}
	return n(function () {})
});
jQuery(function (i) {
	i(".woocommerce-ordering").on("change", "select.orderby", function () {
		i(this).closest("form").submit()
	}), i("input.qty:not(.product-quantity input.qty)").each(function () {
		var o = parseFloat(i(this).attr("min"));
		0 <= o && parseFloat(i(this).val()) < o && i(this).val(o)
	}), i(".woocommerce-store-notice__dismiss-link").click(function () {
		Cookies.set("store_notice", "hidden", {
			path: "/"
		}), i(".woocommerce-store-notice").hide()
	}), "hidden" === Cookies.get("store_notice") ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(document.body).on("click", function () {
		i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
	}), i(".woocommerce-input-wrapper").on("click", function (o) {
		o.stopPropagation()
	}), i(".woocommerce-input-wrapper :input").on("keydown", function (o) {
		var e = i(this).parent().find("span.description");
		if (27 === o.which && e.length && e.is(":visible")) return e.prop("aria-hidden", !0).slideUp(250), o.preventDefault(), !1
	}).on("click focus", function () {
		var o = i(this).parent(),
			e = o.find("span.description");
		o.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), e.length && e.is(":hidden") && e.prop("aria-hidden", !1).slideDown(250), o.removeClass("currentTarget")
	}), i.scroll_to_notices = function (o) {
		o.length && i("html, body").animate({
			scrollTop: o.offset().top - 100
		}, 1e3)
	}
});
jQuery(function (n) {
	if ("undefined" == typeof wc_cart_fragments_params) return !1;
	var t = !0,
		o = wc_cart_fragments_params.cart_hash_key;
	try {
		t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
	} catch (w) {
		t = !1
	}

	function a() {
		t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
	}

	function s(e) {
		t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
	}
	var e = {
		url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
		type: "POST",
		success: function (e) {
			e && e.fragments && (n.each(e.fragments, function (e, t) {
				n(e).replaceWith(t)
			}), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), n(document.body).trigger("wc_fragments_refreshed"))
		}
	};

	function r() {
		n.ajax(e)
	}
	if (t) {
		var i = null;
		n(document.body).on("wc_fragment_refresh updated_wc_div", function () {
			r()
		}), n(document.body).on("added_to_cart removed_from_cart", function (e, t, n) {
			var r = sessionStorage.getItem(o);
			null !== r && r !== undefined && "" !== r || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(n)
		}), n(document.body).on("wc_fragments_refreshed", function () {
			clearTimeout(i), i = setTimeout(r, 864e5)
		}), n(window).on("storage onstorage", function (e) {
			o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && r()
		}), n(window).on("pageshow", function (e) {
			e.originalEvent.persisted && (n(".widget_shopping_cart_content").empty(), n(document.body).trigger("wc_fragment_refresh"))
		});
		try {
			var c = n.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
				_ = sessionStorage.getItem(o),
				g = Cookies.get("woocommerce_cart_hash"),
				m = sessionStorage.getItem("wc_cart_created");
			if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
			if (m) {
				var d = 1 * m + 864e5,
					f = (new Date).getTime();
				if (d < f) throw "Fragment expired";
				i = setTimeout(r, d - f)
			}
			if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
			n.each(c, function (e, t) {
				n(e).replaceWith(t)
			}), n(document.body).trigger("wc_fragments_loaded")
		} catch (w) {
			r()
		}
	} else r();
	0 < Cookies.get("woocommerce_items_in_cart") ? n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), n(document.body).on("adding_to_cart", function () {
		n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
	})
});
jQuery.fn.liveSearch = function (conf) {
	var config = jQuery.extend({
		url: '/search-results.php?q=',
		id: 'jquery-live-search',
		duration: 400,
		typeDelay: 200,
		loadingClass: 'loading',
		onSlideUp: function () {},
		uptadePosition: false
	}, conf);
	var liveSearch = jQuery('#' + config.id);
	if (!liveSearch.length) {
		liveSearch = jQuery('<div id="' + config.id + '"></div>').appendTo(document.body).hide().slideUp(0);
		jQuery(document.body).click(function (event) {
			var clicked = jQuery(event.target);
			if (!(clicked.is('#' + config.id) || clicked.parents('#' + config.id).length || clicked.is('input'))) {
				liveSearch.slideUp(config.duration, function () {
					config.onSlideUp();
				});
			}
		});
	}
	return this.each(function () {
		var input = jQuery(this).attr('autocomplete', 'off');
		var liveSearchPaddingBorderHoriz = parseInt(liveSearch.css('paddingLeft'), 10) + parseInt(liveSearch.css('paddingRight'), 10) + parseInt(liveSearch.css('borderLeftWidth'), 10) + parseInt(liveSearch.css('borderRightWidth'), 10);
		var repositionLiveSearch = function () {
			var tmpOffset = input.offset();
			var inputDim = {
				left: tmpOffset.left,
				top: tmpOffset.top,
				width: input.outerWidth(),
				height: input.outerHeight()
			};
			inputDim.topPos = inputDim.top + inputDim.height;
			inputDim.totalWidth = inputDim.width - liveSearchPaddingBorderHoriz;
			liveSearch.css({
				position: 'absolute',
				left: inputDim.left + 'px',
				top: inputDim.topPos + 'px',
				width: inputDim.totalWidth + 'px'
			});
		};
		var showLiveSearch = function () {
			repositionLiveSearch();
			jQuery(window).unbind('resize', repositionLiveSearch);
			jQuery(window).bind('resize', repositionLiveSearch);
			liveSearch.slideDown(config.duration);
		};
		var hideLiveSearch = function () {
			liveSearch.slideUp(config.duration, function () {
				config.onSlideUp();
			});
		};
		input.focus(function () {
			if (this.value !== '') {
				if (liveSearch.html() == '') {
					this.lastValue = '';
					input.keyup();
				} else {
					setTimeout(showLiveSearch, 1);
				}
			}
		}).keyup(function () {
			if (this.value != this.lastValue) {
				input.addClass(config.loadingClass);
				var q = this.value.trim();
				if (this.timer) {
					clearTimeout(this.timer);
				}
				this.timer = setTimeout(function () {
					jQuery.get(config.url + q, function (data) {
						input.removeClass(config.loadingClass);
						if (data.length && q.length) {
							liveSearch.html(data);
							showLiveSearch();
						} else {
							hideLiveSearch();
						}
					});
				}, config.typeDelay);
				this.lastValue = this.value;
			}
		});
	});
};
jQuery(document).ready(function (i) {
	i(document).on("click", ".product a.compare:not(.added)", function (o) {
		o.preventDefault();
		var e = i(this),
			t = {
				action: yith_woocompare.actionadd,
				id: e.data("product_id"),
				context: "frontend"
			},
			a = i(".yith-woocompare-widget ul.products-list");
		void 0 !== i.fn.block && (e.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), a.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		})), i.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionadd),
			data: t,
			dataType: "json",
			success: function (o) {
				void 0 !== i.fn.block && (e.unblock(), a.unblock()), e.addClass("added").attr("href", o.table_url).text(yith_woocompare.added_label), a.html(o.widget_table), "yes" == yith_woocompare.auto_open && i("body").trigger("yith_woocompare_open_popup", {
					response: o.table_url,
					button: e
				})
			}
		})
	}), i(document).on("click", ".product a.compare.added", function (o) {
		o.preventDefault();
		var e = this.href;
		void 0 !== e && i("body").trigger("yith_woocompare_open_popup", {
			response: e,
			button: i(this)
		})
	}), i("body").on("yith_woocompare_open_popup", function (o, e) {
		var t = e.response;
		if (768 <= i(window).width()) i.colorbox({
			href: t,
			iframe: !0,
			width: "90%",
			height: "90%",
			className: "yith_woocompare_colorbox",
			close: yith_woocompare.close_label,
			onClosed: function () {
				var e = i(".yith-woocompare-widget ul.products-list"),
					o = {
						action: yith_woocompare.actionreload,
						context: "frontend"
					};
				void 0 !== i.fn.block && e.block({
					message: null,
					overlayCSS: {
						background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
						backgroundSize: "16px 16px",
						opacity: .6
					}
				}), i.ajax({
					type: "post",
					url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionreload),
					data: o,
					success: function (o) {
						void 0 !== i.fn.block && e.unblock().html(o), e.html(o)
					}
				})
			}
		}), i(window).resize(function () {
			i.colorbox.resize({
				width: "90%",
				height: "90%"
			})
		});
		else {
			var a = t.split("?");
			if (2 <= a.length) {
				for (var r = encodeURIComponent("iframe") + "=", c = a[1].split(/[&;]/g), n = c.length; 0 < n--;) - 1 !== c[n].lastIndexOf(r, 0) && c.splice(n, 1);
				t = a[0] + "?" + c.join("&")
			}
			window.open(t, yith_woocompare.table_title)
		}
	}), i(document).on("click", ".remove a", function (o) {
		o.preventDefault();
		var t = i(this),
			e = {
				action: yith_woocompare.actionremove,
				id: t.data("product_id"),
				context: "frontend"
			};
		i("td.product_" + e.id + ", th.product_" + e.id);
		void 0 !== i.fn.block && t.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), i.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
			data: e,
			dataType: "html",
			success: function (o) {
				var e = i(o).filter("#yith-woocompare");
				i("#yith-woocompare").replaceWith(e), i('.compare[data-product_id="' + t.data("product_id") + '"]', window.parent.document).removeClass("added").html(yith_woocompare.button_text), i(window).trigger("yith_woocompare_product_removed")
			}
		})
	}), i(".yith-woocompare-open a, a.yith-woocompare-open").on("click", function (o) {
		o.preventDefault(), i("body").trigger("yith_woocompare_open_popup", {
			response: function (o, e) {
				o = escape(o), e = escape(e);
				var t = document.location.search,
					a = o + "=" + e,
					r = new RegExp("(&|\\?)" + o + "=[^&]*");
				t = t.replace(r, "$1" + a), RegExp.$1 || (t += (0 < t.length ? "&" : "?") + a);
				return t
			}("action", yith_woocompare.actionview) + "&iframe=true"
		})
	}), i(".yith-woocompare-widget").on("click", "a.compare", function (o) {
		o.preventDefault(), i("body").trigger("yith_woocompare_open_popup", {
			response: i(this).attr("href")
		})
	}).on("click", "li a.remove, a.clear-all", function (o) {
		o.preventDefault();
		var e = i(".yith-woocompare-widget .products-list").data("lang"),
			t = i(this),
			a = t.data("product_id"),
			r = {
				action: yith_woocompare.actionremove,
				id: a,
				context: "frontend",
				responseType: "product_list",
				lang: e
			},
			c = t.parents(".yith-woocompare-widget").find("ul.products-list");
		void 0 !== i.fn.block && c.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), i.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
			data: r,
			dataType: "html",
			success: function (o) {
				"all" == a ? i(".compare.added").removeClass("added").html(yith_woocompare.button_text) : i('.compare[data-product_id="' + a + '"]').removeClass("added").html(yith_woocompare.button_text), c.html(o), void 0 !== i.fn.block && c.unblock()
			}
		})
	}), i("body").on("added_to_cart", function (o, e, t, a) {
		i(a).closest("table.compare-list").length && a.hide()
	})
});
/*!
	Colorbox 1.6.1
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (t, e, i) {
	function n(i, n, o) {
		var r = e.createElement(i);
		return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
	}

	function o() {
		return i.innerHeight ? i.innerHeight : t(i).height()
	}

	function r(e, i) {
		i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
			var n;
			return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
		}, this.get = function (e) {
			var i = this.value(e);
			return t.isFunction(i) ? i.call(this.el, this) : i
		}
	}

	function h(t) {
		var e = W.length,
			i = (A + t) % e;
		return 0 > i ? e + i : i
	}

	function a(t, e) {
		return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
	}

	function s(t, e) {
		return t.get("photo") || t.get("photoRegex").test(e)
	}

	function l(t, e) {
		return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
	}

	function d(t) {
		"contains" in y[0] && !y[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), y.focus())
	}

	function c(t) {
		c.str !== t && (y.add(v).removeClass(c.str).addClass(t), c.str = t)
	}

	function g(e) {
		A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function () {
			var i = t.data(this, Y),
				n = new r(this, i);
			return n.get("rel") === e
		}), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el)
	}

	function u(i) {
		t(e).trigger(i), ae.triggerHandler(i)
	}

	function f(i) {
		var o;
		if (!G) {
			if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
				$ = q = !0, c(_.get("className")), y.css({
					visibility: "hidden",
					display: "block",
					opacity: ""
				}), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
					width: "",
					height: ""
				}).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);
				var h = a(_.get("initialWidth"), "x"),
					s = a(_.get("initialHeight"), "y"),
					l = _.get("maxWidth"),
					f = _.get("maxHeight");
				_.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, _.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, I.css({
					width: "",
					height: _.h
				}), J.position(), u(ee), _.get("onOpen"), O.add(S).hide(), y.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function () {
					e.removeEventListener("focus", d, !0)
				})), _.get("returnFocus") && ae.one(re, function () {
					t(_.el).focus()
				})
			}
			var p = parseFloat(_.get("opacity"));
			v.css({
				opacity: p === p ? p : "",
				cursor: _.get("overlayClose") ? "pointer" : "",
				visibility: "visible"
			}).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
		}
	}

	function p() {
		y || (V = !1, E = t(i), y = n(se).attr({
			id: Y,
			"class": t.support.opacity === !1 ? Z + "IE" : "",
			role: "dialog",
			tabindex: "-1"
		}).hide(), v = n(se, "Overlay").hide(), M = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), x = n(se, "Wrapper"), b = n(se, "Content").append(S = n(se, "Title"), F = n(se, "Current"), P = t('<button type="button"/>').attr({
			id: Z + "Previous"
		}), K = t('<button type="button"/>').attr({
			id: Z + "Next"
		}), R = n("button", "Slideshow"), M), B = t('<button type="button"/>').attr({
			id: Z + "Close"
		}), x.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
			"float": "left"
		}), L = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(F).add(R)), e.body && !y.parent().length && t(e.body).append(v, y.append(x, L))
	}

	function m() {
		function i(t) {
			t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
		}
		return y ? (V || (V = !0, K.click(function () {
			J.next()
		}), P.click(function () {
			J.prev()
		}), B.click(function () {
			J.close()
		}), v.click(function () {
			_.get("overlayClose") && J.close()
		}), t(e).bind("keydown." + Z, function (t) {
			var e = t.keyCode;
			$ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
		}), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
	}

	function w() {
		var e, o, r, h = J.prep,
			d = ++le;
		if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function () {
				M.show()
			}, 100), _.get("inline")) {
			var c = t(e);
			r = t("<div>").hide().insertBefore(c), ae.one(he, function () {
				r.replaceWith(c)
			}), h(c)
		} else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = _.get("createImg"), t(U).addClass(Z + "Photo").bind("error." + Z, function () {
			h(n(se, "Error").html(_.get("imgError")))
		}).one("load", function () {
			d === le && setTimeout(function () {
				var e;
				_.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function () {
					U.height -= U.height * e, U.width -= U.width * e
				}, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (U.style.cursor = "pointer", t(U).bind("click." + Z, function () {
					J.next()
				})), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
			}, 1)
		}), U.src = e) : e && L.load(e, _.get("data"), function (e, i) {
			d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
		})
	}
	var v, y, x, b, T, C, H, k, W, E, I, L, M, S, F, R, K, P, B, O, _, j, D, N, z, A, U, $, q, G, Q, J, V, X = {
			html: !1,
			photo: !1,
			iframe: !1,
			inline: !1,
			transition: "elastic",
			speed: 300,
			fadeOut: 300,
			width: !1,
			initialWidth: "600",
			innerWidth: !1,
			maxWidth: !1,
			height: !1,
			initialHeight: "450",
			innerHeight: !1,
			maxHeight: !1,
			scalePhotos: !0,
			scrolling: !0,
			opacity: .9,
			preloading: !0,
			className: !1,
			overlayClose: !0,
			escKey: !0,
			arrowKey: !0,
			top: !1,
			bottom: !1,
			left: !1,
			right: !1,
			fixed: !1,
			data: void 0,
			closeButton: !0,
			fastIframe: !0,
			open: !1,
			reposition: !0,
			loop: !0,
			slideshow: !1,
			slideshowAuto: !0,
			slideshowSpeed: 2500,
			slideshowStart: "start slideshow",
			slideshowStop: "stop slideshow",
			photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
			retinaImage: !1,
			retinaUrl: !1,
			retinaSuffix: "@2x.$1",
			current: "image {current} of {total}",
			previous: "previous",
			next: "next",
			close: "close",
			xhrError: "This content failed to load.",
			imgError: "This image failed to load.",
			returnFocus: !0,
			trapFocus: !0,
			onOpen: !1,
			onLoad: !1,
			onComplete: !1,
			onCleanup: !1,
			onClosed: !1,
			rel: function () {
				return this.rel
			},
			href: function () {
				return t(this).attr("href")
			},
			title: function () {
				return this.title
			},
			createImg: function () {
				var e = new Image,
					i = t(this).data("cbox-img-attrs");
				return "object" == typeof i && t.each(i, function (t, i) {
					e[t] = i
				}), e
			},
			createIframe: function () {
				var i = e.createElement("iframe"),
					n = t(this).data("cbox-iframe-attrs");
				return "object" == typeof n && t.each(n, function (t, e) {
					i[t] = e
				}), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullScreen = !0, i
			}
		},
		Y = "colorbox",
		Z = "cbox",
		te = Z + "Element",
		ee = Z + "_open",
		ie = Z + "_load",
		ne = Z + "_complete",
		oe = Z + "_cleanup",
		re = Z + "_closed",
		he = Z + "_purge",
		ae = t("<a/>"),
		se = "div",
		le = 0,
		de = {},
		ce = function () {
			function t() {
				clearTimeout(h)
			}

			function e() {
				(_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
			}

			function i() {
				R.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), y.removeClass(a + "off").addClass(a + "on")
			}

			function n() {
				t(), ae.unbind(ne, e).unbind(ie, t), R.html(_.get("slideshowStart")).unbind(s).one(s, function () {
					J.next(), i()
				}), y.removeClass(a + "on").addClass(a + "off")
			}

			function o() {
				r = !1, R.hide(), t(), ae.unbind(ne, e).unbind(ie, t), y.removeClass(a + "off " + a + "on")
			}
			var r, h, a = Z + "Slideshow_",
				s = "click." + Z;
			return function () {
				r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), R.show())
			}
		}();
	t[Y] || (t(p), J = t.fn[Y] = t[Y] = function (e, i) {
		var n, o = this;
		return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function () {
			var i = t.data(this, Y) || {};
			t.data(this, Y, t.extend(i, e))
		}).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
	}, J.position = function (e, i) {
		function n() {
			T[0].style.width = k[0].style.width = b[0].style.width = parseInt(y[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(y[0].style.height, 10) - j + "px"
		}
		var r, h, s, l = 0,
			d = 0,
			c = y.offset();
		if (E.unbind("resize." + Z), y.css({
				top: -9e4,
				left: -9e4
			}), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, y.css({
				position: "fixed"
			})) : (l = h, d = s, y.css({
				position: "absolute"
			})), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), y.css({
				top: c.top,
				left: c.left,
				visibility: "visible"
			}), x[0].style.width = x[0].style.height = "9999px", r = {
				width: _.w + z + D,
				height: _.h + N + j,
				top: l,
				left: d
			}, e) {
			var g = 0;
			t.each(r, function (t) {
				return r[t] !== de[t] ? (g = e, void 0) : void 0
			}), e = g
		}
		de = r, e || y.css(r), y.dequeue().animate(r, {
			duration: e || 0,
			complete: function () {
				n(), q = !1, x[0].style.width = _.w + z + D + "px", x[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function () {
					E.bind("resize." + Z, J.position)
				}, 1), t.isFunction(i) && i()
			},
			step: n
		})
	}, J.resize = function (t) {
		var e;
		$ && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({
			width: _.w
		}), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({
			height: "auto"
		}), _.h = I.height()), I.css({
			height: _.h
		}), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
	}, J.prep = function (i) {
		function o() {
			return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
		}

		function a() {
			return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
		}
		if ($) {
			var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
			I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(L.show()).css({
				width: o(),
				overflow: _.get("scrolling") ? "auto" : "hidden"
			}).css({
				height: a()
			}).prependTo(b), L.hide(), t(U).css({
				"float": "none"
			}), c(_.get("className")), d = function () {
				function i() {
					t.support.opacity === !1 && y[0].style.removeAttribute("filter")
				}
				var n, o, a = W.length;
				$ && (o = function () {
					clearTimeout(Q), M.hide(), u(ne), _.get("onComplete")
				}, S.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && F.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function () {
					var i, n = W[this],
						o = new r(n, t.data(n, Y)),
						h = o.get("href");
					h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
				})) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
					src: _.get("href"),
					"class": Z + "Iframe"
				}).one("load", o).appendTo(I), ae.one(he, function () {
					n.src = "//about:blank"
				}), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i())
			}, "fade" === _.get("transition") ? y.fadeTo(g, 0, function () {
				J.position(0, d)
			}) : J.position(g, d)
		}
	}, J.next = function () {
		!q && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A]))
	}, J.prev = function () {
		!q && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A]))
	}, J.close = function () {
		$ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), y.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
			y.hide(), v.hide(), u(he), I.remove(), setTimeout(function () {
				G = !1, u(re), _.get("onClosed")
			}, 1)
		}))
	}, J.remove = function () {
		y && (y.stop(), t[Y].close(), y.stop(!1, !0).remove(), v.remove(), G = !1, y = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
	}, J.element = function () {
		return t(_.el)
	}, J.settings = X)
})(jQuery, document, window);
/**
 * frontend.js
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Quick View
 * @version 1.0.0
 */
jQuery(document).ready(function (e) {
	"use strict";
	if ("undefined" != typeof yith_qv) {
		var a = e(document).find("#yith-quick-view-modal"),
			t = a.find(".yith-quick-view-overlay"),
			c = a.find("#yith-quick-view-content"),
			n = a.find("#yith-quick-view-close"),
			d = a.find(".yith-wcqv-wrapper"),
			u = d.width(),
			r = d.height(),
			i = function () {
				var t = e(window).width(),
					i = e(window).height(),
					n = u < t - 60 ? u : t - 60,
					o = r < i - 120 ? r : i - 120;
				d.css({
					left: t / 2 - n / 2,
					top: i / 2 - o / 2,
					width: n + "px",
					height: o + "px"
				})
			};
		e.fn.yith_quick_view = function () {
			e(document).off("click", ".yith-wcqv-button").on("click", ".yith-wcqv-button", function (t) {
				t.preventDefault();
				var i = e(this),
					n = i.data("product_id"),
					o = !1;
				void 0 !== yith_qv.loader && (o = !0, i.block({
					message: null,
					overlayCSS: {
						background: "#fff url(" + yith_qv.loader + ") no-repeat center",
						opacity: .5,
						cursor: "none"
					}
				}), a.hasClass("loading") || a.addClass("loading"), e(document).trigger("qv_loading")), l(i, n, o)
			})
		};
		var l = function (n, t, o) {
			e.ajax({
				url: yith_qv.ajaxurl,
				data: {
					action: "yith_load_product_quick_view",
					product_id: t,
					lang: yith_qv.lang
				},
				dataType: "html",
				type: "POST",
				success: function (t) {
					c.html(t), yith_qv.is2_2 && c.find("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
					var i = c.find(".variations_form");
					i.each(function () {
						e(this).wc_variation_form(), void 0 !== e.fn.yith_wccl && e(this).yith_wccl()
					}), i.trigger("check_variations"), i.trigger("reset_image"), void 0 !== e.fn.prettyPhoto && c.find("a[data-rel^='prettyPhoto'], a.zoom").prettyPhoto({
						hook: "data-rel",
						social_tools: !1,
						theme: "pp_woocommerce",
						horizontal_padding: 20,
						opacity: .8,
						deeplinking: !1
					}), void 0 !== e.fn.wc_product_gallery && c.find(".woocommerce-product-gallery").each(function () {
						e(this).wc_product_gallery()
					}), a.hasClass("open") || (a.removeClass("loading").addClass("open"), o && n.unblock()), e(document).trigger("qv_loader_stop")
				}
			})
		};
		! function () {
			t.on("click", function (t) {
				i()
			}), e(document).keyup(function (t) {
				27 === t.keyCode && i()
			}), n.on("click", function (t) {
				t.preventDefault(), i()
			});
			var i = function () {
				a.removeClass("open").removeClass("loading"), setTimeout(function () {
					c.html("")
				}, 1e3)
			}
		}(), i(), e(window).on("resize", i), e.fn.yith_quick_view(), e(document).on("yith_infs_adding_elem yith-wcan-ajax-filtered", function () {
			e.fn.yith_quick_view()
		})
	}
});
! function (t) {
	function e() {
		var t = location.href;
		return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
	}

	function i() {
		"undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
	}

	function p() {
		-1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
	}

	function o(t, e) {
		var i = "[\\?&]" + (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)",
			p = new RegExp(i).exec(e);
		return null == p ? "" : p[1]
	}
	t.prettyPhoto = {
		version: "3.1.6"
	}, t.fn.prettyPhoto = function (a) {
		function s() {
			t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
				height: u.contentHeight,
				width: u.contentWidth
			}, settings.animation_speed), $pp_pic_holder.animate({
				top: projectedTop,
				left: j / 2 - u.containerWidth / 2 < 0 ? 0 : j / 2 - u.containerWidth / 2,
				width: u.containerWidth
			}, settings.animation_speed, function () {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(u.height).width(u.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (u.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
			}), m(), a.ajaxcallback()
		}

		function n(e) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
				t(".pp_loaderIcon").show(), e()
			})
		}

		function l(e) {
			e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
		}

		function r(t, e) {
			if (resized = !1, d(t, e), imageWidth = t, imageHeight = e, (k > j || b > I) && doresize && settings.allow_resize && !$) {
				for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = e / t * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
				(k > j || b > I) && r(k, b), d(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(b),
				containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
				contentHeight: Math.floor(y),
				contentWidth: Math.floor(w),
				resized: resized
			}
		}

		function d(e, i) {
			e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
				position: "absolute",
				top: -1e4
			}), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
				position: "absolute",
				top: -1e4
			}), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = e, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = e
		}

		function h(t) {
			return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
		}

		function c() {
			if (doresize && "undefined" != typeof $pp_pic_holder) {
				if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
				$pp_pic_holder.css({
					top: projectedTop,
					left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
				})
			}
		}

		function _() {
			return self.pageYOffset ? {
				scrollTop: self.pageYOffset,
				scrollLeft: self.pageXOffset
			} : document.documentElement && document.documentElement.scrollTop ? {
				scrollTop: document.documentElement.scrollTop,
				scrollLeft: document.documentElement.scrollLeft
			} : document.body ? {
				scrollTop: document.body.scrollTop,
				scrollLeft: document.body.scrollLeft
			} : void 0
		}

		function g() {
			I = t(window).height(), j = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(j)
		}

		function m() {
			isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((u.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
		}

		function f(e) {
			if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
				currentGalleryPage = 0, toInject = "";
				for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
					return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
				}), $pp_gallery.find(".pp_arrow_previous").click(function () {
					return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
				}), $pp_pic_holder.find(".pp_content").hover(function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				}), itemWidth = 57, $pp_gallery_li.each(function (e) {
					t(this).find("a").click(function () {
						return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
					})
				})
			}
			settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
				return t.prettyPhoto.startSlideshow(), !1
			})), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
				opacity: 0,
				height: t(document).height(),
				width: t(window).width()
			}).bind("click", function () {
				settings.modal || t.prettyPhoto.close()
			}), t("a.pp_close").bind("click", function () {
				return t.prettyPhoto.close(), !1
			}), settings.allow_expand && t("a.pp_expand").bind("click", function (e) {
				return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
					t.prettyPhoto.open()
				}), !1
			}), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
				return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
			}), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
				return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
			}), c()
		}
		a = jQuery.extend({
			hook: "rel",
			animation_speed: "fast",
			ajaxcallback: function () {},
			slideshow: 5e3,
			autoplay_slideshow: !1,
			opacity: .8,
			show_title: !0,
			allow_resize: !0,
			allow_expand: !0,
			default_width: 500,
			default_height: 344,
			counter_separator_label: "/",
			theme: "pp_default",
			horizontal_padding: 20,
			hideflash: !1,
			wmode: "opaque",
			autoplay: !0,
			modal: !1,
			deeplinking: !0,
			overlay_gallery: !0,
			overlay_gallery_max: 30,
			keyboard_shortcuts: !0,
			changepicturecallback: function () {},
			callback: function () {},
			ie6_fallback: !0,
			markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, a);
		var u, v, y, w, b, k, P, x = this,
			$ = !1,
			I = t(window).height(),
			j = t(window).width();
		return doresize = !0, scroll_pos = _(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
			c(), g()
		}), a.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (e) {
			if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
				case 37:
					t.prettyPhoto.changePage("previous"), e.preventDefault();
					break;
				case 39:
					t.prettyPhoto.changePage("next"), e.preventDefault();
					break;
				case 27:
					settings.modal || t.prettyPhoto.close(), e.preventDefault()
			}
		}), t.prettyPhoto.initialize = function () {
			return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("href")
			}) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : ""
			}) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("title") ? t(e).attr("title") : ""
			}) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), f(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function () {
				c()
			}), t.prettyPhoto.open(), !1
		}, t.prettyPhoto.open = function (e) {
			return "undefined" == typeof settings && (settings = a, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, f(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).length), t(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).length), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
				switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).length - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
							u = r(imgPreloader.width, imgPreloader.height), s()
						}, imgPreloader.onerror = function () {
							alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
						}, imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						u = r(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "//www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						u = r(movie_width, movie_height), movie_id = pp_images[set_position];
						var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
							i = movie_id.match(e);
						movie = "//player.vimeo.com/video/" + i[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = u.width + "/embed/?moog_width=" + u.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, u.height).replace(/{path}/g, movie);
						break;
					case "quicktime":
						(u = r(movie_width, movie_height)).height += 15, u.contentHeight += 15, u.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						u = r(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						u = r(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = !1, u = r(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function (t) {
							toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
						});
						break;
					case "custom":
						u = r(movie_width, movie_height), toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, u = r(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
				}
				imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
			}), !1
		}, t.prettyPhoto.changePage = function (e) {
			currentGalleryPage = 0, "previous" == e ? --set_position < 0 && (set_position = t(pp_images).length - 1) : "next" == e ? ++set_position > t(pp_images).length - 1 && (set_position = 0) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
				t.prettyPhoto.open()
			})
		}, t.prettyPhoto.changeGalleryPage = function (t) {
			"next" == t ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == t ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		}, t.prettyPhoto.startSlideshow = function () {
			void 0 === P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
				return t.prettyPhoto.stopSlideshow(), !1
			}), P = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
		}, t.prettyPhoto.stopSlideshow = function () {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
				return t.prettyPhoto.startSlideshow(), !1
			}), clearInterval(P), P = undefined
		}, t.prettyPhoto.close = function () {
			$pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
				t(this).remove()
			}), $pp_overlay.fadeOut(settings.animation_speed, function () {
				settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
			}))
		}, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
			t("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
		}, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
	}
}(jQuery);
var pp_alreadyInitialized = !1;
/**
 * jQuery SelectBox
 *
 * v1.2.0
 * github.com/marcj/jquery-selectBox
 */
(function (a) {
	var b = this.SelectBox = function (c, d) {
		if (c instanceof jQuery) {
			if (c.length > 0) {
				c = c[0]
			} else {
				return
			}
		}
		this.typeTimer = null;
		this.typeSearch = "";
		this.isMac = navigator.platform.match(/mac/i);
		d = "object" === typeof d ? d : {};
		this.selectElement = c;
		if (!d.mobile && navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) {
			return false
		}
		if ("select" !== c.tagName.toLowerCase()) {
			return false
		}
		this.init(d)
	};
	b.prototype.version = "1.2.0";
	b.prototype.init = function (o) {
		var j = a(this.selectElement);
		if (j.data("selectBox-control")) {
			return false
		}
		var f = a('<a class="selectBox" />'),
			h = j.attr("multiple") || parseInt(j.attr("size")) > 1,
			d = o || {},
			c = parseInt(j.prop("tabindex")) || 0,
			m = this;
		f.width(j.outerWidth()).addClass(j.attr("class")).attr("title", j.attr("title") || "").attr("tabindex", c).css("display", "inline-block").bind("focus.selectBox", function () {
			if (this !== document.activeElement && document.body !== document.activeElement) {
				a(document.activeElement).blur()
			}
			if (f.hasClass("selectBox-active")) {
				return
			}
			f.addClass("selectBox-active");
			j.trigger("focus")
		}).bind("blur.selectBox", function () {
			if (!f.hasClass("selectBox-active")) {
				return
			}
			f.removeClass("selectBox-active");
			j.trigger("blur")
		});
		if (!a(window).data("selectBox-bindings")) {
			a(window).data("selectBox-bindings", true).bind("scroll.selectBox", this.hideMenus).bind("resize.selectBox", this.hideMenus)
		}
		if (j.attr("disabled")) {
			f.addClass("selectBox-disabled")
		}
		j.bind("click.selectBox", function (p) {
			f.focus();
			p.preventDefault()
		});
		if (h) {
			o = this.getOptions("inline");
			f.append(o).data("selectBox-options", o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox", function (p) {
				m.handleKeyDown(p)
			}).bind("keypress.selectBox", function (p) {
				m.handleKeyPress(p)
			}).bind("mousedown.selectBox", function (p) {
				if (1 !== p.which) {
					return
				}
				if (a(p.target).is("A.selectBox-inline")) {
					p.preventDefault()
				}
				if (!f.hasClass("selectBox-focus")) {
					f.focus()
				}
			}).insertAfter(j);
			if (!j[0].style.height) {
				var n = j.attr("size") ? parseInt(j.attr("size")) : 5;
				var e = f.clone().removeAttr("id").css({
					position: "absolute",
					top: "-9999em"
				}).show().appendTo("body");
				e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");
				var l = parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
				e.remove();
				f.height(l * n)
			}
			this.disableSelection(f)
		} else {
			var i = a('<span class="selectBox-label" />'),
				k = a('<span class="selectBox-arrow" />');
			i.attr("class", this.getLabelClass()).text(this.getLabelText());
			o = this.getOptions("dropdown");
			o.appendTo("BODY");
			f.data("selectBox-options", o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox", function (p) {
				if (1 === p.which) {
					if (f.hasClass("selectBox-menuShowing")) {
						m.hideMenus()
					} else {
						p.stopPropagation();
						o.data("selectBox-down-at-x", p.screenX).data("selectBox-down-at-y", p.screenY);
						m.showMenu()
					}
				}
			}).bind("keydown.selectBox", function (p) {
				m.handleKeyDown(p)
			}).bind("keypress.selectBox", function (p) {
				m.handleKeyPress(p)
			}).bind("open.selectBox", function (q, p) {
				if (p && p._selectBox === true) {
					return
				}
				m.showMenu()
			}).bind("close.selectBox", function (q, p) {
				if (p && p._selectBox === true) {
					return
				}
				m.hideMenus()
			}).insertAfter(j);
			var g = f.width() - k.outerWidth() - parseInt(i.css("paddingLeft")) || 0 - parseInt(i.css("paddingRight")) || 0;
			i.width(g);
			this.disableSelection(f)
		}
		j.addClass("selectBox").data("selectBox-control", f).data("selectBox-settings", d).hide()
	};
	b.prototype.getOptions = function (j) {
		var f;
		var c = a(this.selectElement);
		var e = this;
		var d = function (i, k) {
			i.children("OPTION, OPTGROUP").each(function () {
				if (a(this).is("OPTION")) {
					if (a(this).length > 0) {
						e.generateOptions(a(this), k)
					} else {
						k.append("<li>\u00A0</li>")
					}
				} else {
					var l = a('<li class="selectBox-optgroup" />');
					l.text(a(this).attr("label"));
					k.append(l);
					k = d(a(this), k)
				}
			});
			return k
		};
		switch (j) {
			case "inline":
				f = a('<ul class="selectBox-options" />');
				f = d(c, f);
				f.find("A").bind("mouseover.selectBox", function (i) {
					e.addHover(a(this).parent())
				}).bind("mouseout.selectBox", function (i) {
					e.removeHover(a(this).parent())
				}).bind("mousedown.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					i.preventDefault();
					if (!c.selectBox("control").hasClass("selectBox-active")) {
						c.selectBox("control").focus()
					}
				}).bind("mouseup.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					e.hideMenus();
					e.selectOption(a(this).parent(), i)
				});
				this.disableSelection(f);
				return f;
			case "dropdown":
				f = a('<ul class="selectBox-dropdown-menu selectBox-options" />');
				f = d(c, f);
				f.data("selectBox-select", c).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function (i) {
					if (i.which === 1) {
						i.preventDefault();
						if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
							f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
							e.hideMenus()
						}
					}
				}).bind("mouseup.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
						return
					} else {
						f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")
					}
					e.selectOption(a(this).parent());
					e.hideMenus()
				}).bind("mouseover.selectBox", function (i) {
					e.addHover(a(this).parent())
				}).bind("mouseout.selectBox", function (i) {
					e.removeHover(a(this).parent())
				});
				var h = c.attr("class") || "";
				if ("" !== h) {
					h = h.split(" ");
					for (var g in h) {
						f.addClass(h[g] + "-selectBox-dropdown-menu")
					}
				}
				this.disableSelection(f);
				return f
		}
	};
	b.prototype.getLabelClass = function () {
		var c = a(this.selectElement).find("OPTION:selected");
		return ("selectBox-label " + (c.attr("class") || "")).replace(/\s+$/, "")
	};
	b.prototype.getLabelText = function () {
		var c = a(this.selectElement).find("OPTION:selected");
		return c.text() || "\u00A0"
	};
	b.prototype.setLabel = function () {
		var c = a(this.selectElement);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.find(".selectBox-label").attr("class", this.getLabelClass()).text(this.getLabelText())
	};
	b.prototype.destroy = function () {
		var c = a(this.selectElement);
		var e = c.data("selectBox-control");
		if (!e) {
			return
		}
		var d = e.data("selectBox-options");
		d.remove();
		e.remove();
		c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show()
	};
	b.prototype.refresh = function () {
		var c = a(this.selectElement),
			e = c.data("selectBox-control"),
			f = e.hasClass("selectBox-dropdown"),
			d = e.hasClass("selectBox-menuShowing");
		c.selectBox("options", c.html());
		if (f && d) {
			this.showMenu()
		}
	};
	b.prototype.showMenu = function () {
		var e = this,
			d = a(this.selectElement),
			j = d.data("selectBox-control"),
			h = d.data("selectBox-settings"),
			f = j.data("selectBox-options");
		if (j.hasClass("selectBox-disabled")) {
			return false
		}
		this.hideMenus();
		var g = parseInt(j.css("borderBottomWidth")) || 0;
		f.width(j.innerWidth()).css({
			top: j.offset().top + j.outerHeight() - g,
			left: j.offset().left
		});
		if (d.triggerHandler("beforeopen")) {
			return false
		}
		var i = function () {
			d.triggerHandler("open", {
				_selectBox: true
			})
		};
		switch (h.menuTransition) {
			case "fade":
				f.fadeIn(h.menuSpeed, i);
				break;
			case "slide":
				f.slideDown(h.menuSpeed, i);
				break;
			default:
				f.show(h.menuSpeed, i);
				break
		}
		if (!h.menuSpeed) {
			i()
		}
		var c = f.find(".selectBox-selected:first");
		this.keepOptionInView(c, true);
		this.addHover(c);
		j.addClass("selectBox-menuShowing");
		a(document).bind("mousedown.selectBox", function (k) {
			if (1 === k.which) {
				if (a(k.target).parents().andSelf().hasClass("selectBox-options")) {
					return
				}
				e.hideMenus()
			}
		})
	};
	b.prototype.hideMenus = function () {
		if (a(".selectBox-dropdown-menu:visible").length === 0) {
			return
		}
		a(document).unbind("mousedown.selectBox");
		a(".selectBox-dropdown-menu").each(function () {
			var d = a(this),
				c = d.data("selectBox-select"),
				g = c.data("selectBox-control"),
				e = c.data("selectBox-settings");
			if (c.triggerHandler("beforeclose")) {
				return false
			}
			var f = function () {
				c.triggerHandler("close", {
					_selectBox: true
				})
			};
			if (e) {
				switch (e.menuTransition) {
					case "fade":
						d.fadeOut(e.menuSpeed, f);
						break;
					case "slide":
						d.slideUp(e.menuSpeed, f);
						break;
					default:
						d.hide(e.menuSpeed, f);
						break
				}
				if (!e.menuSpeed) {
					f()
				}
				g.removeClass("selectBox-menuShowing")
			} else {
				a(this).hide();
				a(this).triggerHandler("close", {
					_selectBox: true
				});
				a(this).removeClass("selectBox-menuShowing")
			}
		})
	};
	b.prototype.selectOption = function (d, j) {
		var c = a(this.selectElement);
		d = a(d);
		var k = c.data("selectBox-control"),
			h = c.data("selectBox-settings");
		if (k.hasClass("selectBox-disabled")) {
			return false
		}
		if (0 === d.length || d.hasClass("selectBox-disabled")) {
			return false
		}
		if (c.attr("multiple")) {
			if (j.shiftKey && k.data("selectBox-last-selected")) {
				d.toggleClass("selectBox-selected");
				var e;
				if (d.index() > k.data("selectBox-last-selected").index()) {
					e = d.siblings().slice(k.data("selectBox-last-selected").index(), d.index())
				} else {
					e = d.siblings().slice(d.index(), k.data("selectBox-last-selected").index())
				}
				e = e.not(".selectBox-optgroup, .selectBox-disabled");
				if (d.hasClass("selectBox-selected")) {
					e.addClass("selectBox-selected")
				} else {
					e.removeClass("selectBox-selected")
				}
			} else {
				if ((this.isMac && j.metaKey) || (!this.isMac && j.ctrlKey)) {
					d.toggleClass("selectBox-selected")
				} else {
					d.siblings().removeClass("selectBox-selected");
					d.addClass("selectBox-selected")
				}
			}
		} else {
			d.siblings().removeClass("selectBox-selected");
			d.addClass("selectBox-selected")
		}
		if (k.hasClass("selectBox-dropdown")) {
			k.find(".selectBox-label").text(d.text())
		}
		var f = 0,
			g = [];
		if (c.attr("multiple")) {
			k.find(".selectBox-selected A").each(function () {
				g[f++] = a(this).attr("rel")
			})
		} else {
			g = d.find("A").attr("rel")
		}
		k.data("selectBox-last-selected", d);
		if (c.val() !== g) {
			c.val(g);
			this.setLabel();
			c.trigger("change")
		}
		return true
	};
	b.prototype.addHover = function (d) {
		d = a(d);
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			e = f.data("selectBox-options");
		e.find(".selectBox-hover").removeClass("selectBox-hover");
		d.addClass("selectBox-hover")
	};
	b.prototype.getSelectElement = function () {
		return this.selectElement
	};
	b.prototype.removeHover = function (d) {
		d = a(d);
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			e = f.data("selectBox-options");
		e.find(".selectBox-hover").removeClass("selectBox-hover")
	};
	b.prototype.keepOptionInView = function (e, d) {
		if (!e || e.length === 0) {
			return
		}
		var c = a(this.selectElement),
			j = c.data("selectBox-control"),
			g = j.data("selectBox-options"),
			h = j.hasClass("selectBox-dropdown") ? g : g.parent(),
			i = parseInt(e.offset().top - h.position().top),
			f = parseInt(i + e.outerHeight());
		if (d) {
			h.scrollTop(e.offset().top - h.offset().top + h.scrollTop() - (h.height() / 2))
		} else {
			if (i < 0) {
				h.scrollTop(e.offset().top - h.offset().top + h.scrollTop())
			}
			if (f > h.height()) {
				h.scrollTop((e.offset().top + e.outerHeight()) - h.offset().top + h.scrollTop() - h.height())
			}
		}
	};
	b.prototype.handleKeyDown = function (c) {
		var k = a(this.selectElement),
			g = k.data("selectBox-control"),
			l = g.data("selectBox-options"),
			e = k.data("selectBox-settings"),
			f = 0,
			h = 0;
		if (g.hasClass("selectBox-disabled")) {
			return
		}
		switch (c.keyCode) {
			case 8:
				c.preventDefault();
				this.typeSearch = "";
				break;
			case 9:
			case 27:
				this.hideMenus();
				this.removeHover();
				break;
			case 13:
				if (g.hasClass("selectBox-menuShowing")) {
					this.selectOption(l.find("LI.selectBox-hover:first"), c);
					if (g.hasClass("selectBox-dropdown")) {
						this.hideMenus()
					}
				} else {
					this.showMenu()
				}
				break;
			case 38:
			case 37:
				c.preventDefault();
				if (g.hasClass("selectBox-menuShowing")) {
					var d = l.find(".selectBox-hover").prev("LI");
					f = l.find("LI:not(.selectBox-optgroup)").length;
					h = 0;
					while (d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup")) {
						d = d.prev("LI");
						if (d.length === 0) {
							if (e.loopOptions) {
								d = l.find("LI:last")
							} else {
								d = l.find("LI:first")
							}
						}
						if (++h >= f) {
							break
						}
					}
					this.addHover(d);
					this.selectOption(d, c);
					this.keepOptionInView(d)
				} else {
					this.showMenu()
				}
				break;
			case 40:
			case 39:
				c.preventDefault();
				if (g.hasClass("selectBox-menuShowing")) {
					var j = l.find(".selectBox-hover").next("LI");
					f = l.find("LI:not(.selectBox-optgroup)").length;
					h = 0;
					while (0 === j.length || j.hasClass("selectBox-disabled") || j.hasClass("selectBox-optgroup")) {
						j = j.next("LI");
						if (j.length === 0) {
							if (e.loopOptions) {
								j = l.find("LI:first")
							} else {
								j = l.find("LI:last")
							}
						}
						if (++h >= f) {
							break
						}
					}
					this.addHover(j);
					this.selectOption(j, c);
					this.keepOptionInView(j)
				} else {
					this.showMenu()
				}
				break
		}
	};
	b.prototype.handleKeyPress = function (e) {
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			d = f.data("selectBox-options");
		if (f.hasClass("selectBox-disabled")) {
			return
		}
		switch (e.keyCode) {
			case 9:
			case 27:
			case 13:
			case 38:
			case 37:
			case 40:
			case 39:
				break;
			default:
				if (!f.hasClass("selectBox-menuShowing")) {
					this.showMenu()
				}
				e.preventDefault();
				clearTimeout(this.typeTimer);
				this.typeSearch += String.fromCharCode(e.charCode || e.keyCode);
				d.find("A").each(function () {
					if (a(this).text().substr(0, this.typeSearch.length).toLowerCase() === this.typeSearch.toLowerCase()) {
						this.addHover(a(this).parent());
						this.selectOption(a(this).parent(), e);
						this.keepOptionInView(a(this).parent());
						return false
					}
				});
				this.typeTimer = setTimeout(function () {
					this.typeSearch = ""
				}, 1000);
				break
		}
	};
	b.prototype.enable = function () {
		var c = a(this.selectElement);
		c.prop("disabled", false);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.removeClass("selectBox-disabled")
	};
	b.prototype.disable = function () {
		var c = a(this.selectElement);
		c.prop("disabled", true);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.addClass("selectBox-disabled")
	};
	b.prototype.setValue = function (f) {
		var c = a(this.selectElement);
		c.val(f);
		f = c.val();
		if (null === f) {
			f = c.children().first().val();
			c.val(f)
		}
		var g = c.data("selectBox-control");
		if (!g) {
			return
		}
		var e = c.data("selectBox-settings"),
			d = g.data("selectBox-options");
		this.setLabel();
		d.find(".selectBox-selected").removeClass("selectBox-selected");
		d.find("A").each(function () {
			if (typeof (f) === "object") {
				for (var h = 0; h < f.length; h++) {
					if (a(this).attr("rel") == f[h]) {
						a(this).parent().addClass("selectBox-selected")
					}
				}
			} else {
				if (a(this).attr("rel") == f) {
					a(this).parent().addClass("selectBox-selected")
				}
			}
		});
		if (e.change) {
			e.change.call(c)
		}
	};
	b.prototype.setOptions = function (m) {
		var l = a(this.selectElement),
			f = l.data("selectBox-control"),
			d = l.data("selectBox-settings"),
			k;
		switch (typeof (m)) {
			case "string":
				l.html(m);
				break;
			case "object":
				l.html("");
				for (var g in m) {
					if (m[g] === null) {
						continue
					}
					if (typeof (m[g]) === "object") {
						var c = a('<optgroup label="' + g + '" />');
						for (var e in m[g]) {
							c.append('<option value="' + e + '">' + m[g][e] + "</option>")
						}
						l.append(c)
					} else {
						var h = a('<option value="' + g + '">' + m[g] + "</option>");
						l.append(h)
					}
				}
				break
		}
		if (!f) {
			return
		}
		f.data("selectBox-options").remove();
		k = f.hasClass("selectBox-dropdown") ? "dropdown" : "inline";
		m = this.getOptions(k);
		f.data("selectBox-options", m);
		switch (k) {
			case "inline":
				f.append(m);
				break;
			case "dropdown":
				this.setLabel();
				a("BODY").append(m);
				break
		}
	};
	b.prototype.disableSelection = function (c) {
		a(c).css("MozUserSelect", "none").bind("selectstart", function (d) {
			d.preventDefault()
		})
	};
	b.prototype.generateOptions = function (e, f) {
		var c = a("<li />"),
			d = a("<a />");
		c.addClass(e.attr("class"));
		c.data(e.data());
		d.attr("rel", e.val()).text(e.text());
		c.append(d);
		if (e.attr("disabled")) {
			c.addClass("selectBox-disabled")
		}
		if (e.attr("selected")) {
			c.addClass("selectBox-selected")
		}
		f.append(c)
	};
	a.extend(a.fn, {
		selectBox: function (e, c) {
			var d;
			switch (e) {
				case "control":
					return a(this).data("selectBox-control");
				case "settings":
					if (!c) {
						return a(this).data("selectBox-settings")
					}
					a(this).each(function () {
						a(this).data("selectBox-settings", a.extend(true, a(this).data("selectBox-settings"), c))
					});
					break;
				case "options":
					if (undefined === c) {
						return a(this).data("selectBox-control").data("selectBox-options")
					}
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.setOptions(c)
						}
					});
					break;
				case "value":
					if (undefined === c) {
						return a(this).val()
					}
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.setValue(c)
						}
					});
					break;
				case "refresh":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.refresh()
						}
					});
					break;
				case "enable":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.enable(this)
						}
					});
					break;
				case "disable":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.disable()
						}
					});
					break;
				case "destroy":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.destroy();
							a(this).data("selectBox", null)
						}
					});
					break;
				case "instance":
					return a(this).data("selectBox");
				default:
					a(this).each(function (g, f) {
						if (!a(f).data("selectBox")) {
							a(f).data("selectBox", new b(f, e))
						}
					});
					break
			}
			return a(this)
		}
	})
})(jQuery);
jQuery(document).ready(function (b) {
	function n() {
		k.off("change");
		k = b('.wishlist_table tbody input[type="checkbox"]');
		"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
		p();
		l()
	}

	function u() {
		var a = b(".woocommerce-message");
		0 == a.length ? b("#yith-wcwl-form").prepend(yith_wcwl_l10n.labels.added_to_cart_message) : a.fadeOut(300, function () {
			b(this).replaceWith(yith_wcwl_l10n.labels.added_to_cart_message).fadeIn()
		})
	}

	function v(a) {
		var c = a.data("product-id"),
			d = b(".add-to-wishlist-" + c);
		c = {
			add_to_wishlist: c,
			product_type: a.data("product-type"),
			action: yith_wcwl_l10n.actions.add_to_wishlist_action
		};
		if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
			var e = a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),
				f = e.find(".wishlist-select"),
				g = e.find(".wishlist-name");
			e = e.find(".wishlist-visibility");
			c.wishlist_id = f.val();
			c.wishlist_name = g.val();
			c.wishlist_visibility = e.val()
		}
		r() ? b.ajax({
			type: "POST",
			url: yith_wcwl_l10n.ajax_url,
			data: c,
			dataType: "json",
			beforeSend: function () {
				a.siblings(".ajax-loading").css("visibility", "visible")
			},
			complete: function () {
				a.siblings(".ajax-loading").css("visibility", "hidden")
			},
			success: function (c) {
				var e = b("#yith-wcwl-popup-message"),
					f = c.result,
					g = c.message;
				if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
					var h = b("select.wishlist-select");
					yith_wcwl_l10n.multi_wishlist && "undefined" != typeof b.prettyPhoto && "undefined" != typeof b.prettyPhoto.close && b.prettyPhoto.close();
					h.each(function (a) {
						a = b(this);
						var d = a.find("option");
						d = d.slice(1, d.length - 1);
						d.remove();
						if ("undefined" != typeof c.user_wishlists)
							for (d in d = 0, c.user_wishlists) "1" != c.user_wishlists[d].is_default && b("<option>").val(c.user_wishlists[d].ID).html(c.user_wishlists[d].wishlist_name).insertBefore(a.find("option:last-child"))
					})
				}
				b("#yith-wcwl-message").html(g);
				e.css("margin-left", "-" + b(e).width() + "px").fadeIn();
				window.setTimeout(function () {
					e.fadeOut()
				}, 2E3);
				"true" == f ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", c.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", c.wishlist_url)) : "exists" == f ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", c.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", c.wishlist_url)) : (d.find(".yith-wcwl-add-button").show().removeClass("hide").addClass("show"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide"));
				b("body").trigger("added_to_wishlist", [a, d])
			}
		}) : alert(yith_wcwl_l10n.labels.cookie_disabled)
	}

	function x(a) {
		var c = a.parents(".cart.wishlist_table"),
			d = c.data("pagination"),
			e = c.data("per-page"),
			f = c.data("page"),
			g = a.parents("[data-row-id]");
		c.find(".pagination-row");
		var h = g.data("row-id"),
			m = c.data("id"),
			w = c.data("token");
		d = {
			action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
			remove_from_wishlist: h,
			pagination: d,
			per_page: e,
			current_page: f,
			wishlist_id: m,
			wishlist_token: w
		};
		b("#yith-wcwl-message").html("&nbsp;");
		"undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
			message: null,
			overlayCSS: {
				background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		});
		b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function () {
			"undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
			n();
			b("body").trigger("removed_from_wishlist", [a, g])
		})
	}

	function y(a, c) {
		var d = a.data("product-id"),
			e = b(document).find(".cart.wishlist_table"),
			f = e.data("pagination"),
			g = e.data("per-page"),
			h = e.data("id"),
			m = e.data("token");
		d = {
			action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
			pagination: f,
			per_page: g,
			wishlist_id: h,
			wishlist_token: m,
			add_to_wishlist: d,
			product_type: a.data("product-type")
		};
		r() ? b.ajax({
			type: "POST",
			url: yith_wcwl_l10n.ajax_url,
			data: d,
			dataType: "html",
			beforeSend: function () {
				"undefined" != typeof b.fn.block && e.fadeTo("400", "0.6").block({
					message: null,
					overlayCSS: {
						background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
						backgroundSize: "16px 16px",
						opacity: .6
					}
				})
			},
			success: function (a) {
				a = b(a).find("#yith-wcwl-form");
				c.replaceWith(a);
				n()
			}
		}) : alert(yith_wcwl_l10n.labels.cookie_disabled)
	}

	function z(a) {
		var c = a.parents(".cart.wishlist_table"),
			d = c.data("token"),
			e = c.data("id"),
			f = a.parents("[data-row-id]"),
			g = f.data("row-id"),
			h = a.val(),
			m = c.data("pagination"),
			k = c.data("per-page"),
			l = c.data("page");
		d = {
			action: yith_wcwl_l10n.actions.move_to_another_wishlist_action,
			wishlist_token: d,
			wishlist_id: e,
			destination_wishlist_token: h,
			item_id: g,
			pagination: m,
			per_page: k,
			current_page: l
		};
		"" != h && ("undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
			message: null,
			overlayCSS: {
				background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function () {
			"undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
			n();
			b("body").trigger("moved_to_another_wishlist", [a, f])
		}))
	}

	function t(a) {
		var c = b(this);
		a.preventDefault();
		c.parents(".wishlist-title").next().show();
		c.parents(".wishlist-title").hide()
	}

	function A(a) {
		var c = b(this);
		a.preventDefault();
		c.parents(".hidden-title-form").hide();
		c.parents(".hidden-title-form").prev().show()
	}

	function r() {
		if (navigator.cookieEnabled) return !0;
		document.cookie = "cookietest=1";
		var a = -1 != document.cookie.indexOf("cookietest=");
		document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
		return a
	}

	function B() {
		if (0 != b(".yith-wcwl-add-to-wishlist").length && 0 == b("#yith-wcwl-popup-message").length) {
			var a = b("<div>").attr("id", "yith-wcwl-message");
			a = b("<div>").attr("id", "yith-wcwl-popup-message").html(a).hide();
			b("body").prepend(a)
		}
	}

	function p() {
		k.on("change", function () {
			var a = "",
				c = b(this).parents(".cart.wishlist_table"),
				d = c.data("id");
			c = c.data("token");
			var e = document.URL;
			k.filter(":checked").each(function () {
				var d = b(this);
				a += 0 != a.length ? "," : "";
				a += d.parents("[data-row-id]").data("row-id")
			});
			e = q(e, "wishlist_products_to_add_to_cart", a);
			e = q(e, "wishlist_token", c);
			e = q(e, "wishlist_id", d);
			b("#custom_add_to_cart").attr("href", e)
		})
	}

	function l() {
		"undefined" != typeof b.prettyPhoto && b('a[data-rel^="prettyPhoto[add_to_wishlist_"]').add('a[data-rel="prettyPhoto[ask_an_estimate]"]').unbind("click").prettyPhoto({
			hook: "data-rel",
			social_tools: !1,
			theme: "pp_woocommerce",
			horizontal_padding: 20,
			opacity: .8,
			deeplinking: !1
		})
	}

	function q(a, b, d) {
		d = b + "=" + d;
		a = a.replace(new RegExp("(&|\\?)" + b + "=[^&]*"), "$1" + d); - 1 < a.indexOf(b + "=") || (a = -1 < a.indexOf("?") ? a + ("&" + d) : a + ("?" + d));
		return a
	}
	var C = "undefined" !== typeof wc_add_to_cart_params && null !== wc_add_to_cart_params ? wc_add_to_cart_params.cart_redirect_after_add : "",
		k = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
	b(document).on("yith_wcwl_init", function () {
		var a = b(this),
			c = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
		a.on("click", ".add_to_wishlist", function (a) {
			var d = b(this);
			a.preventDefault();
			v(d);
			return !1
		});
		a.on("click", ".remove_from_wishlist", function (a) {
			var d = b(this);
			a.preventDefault();
			x(d);
			return !1
		});
		a.on("adding_to_cart", "body", function (a, b, c) {
			"undefined" != typeof b && "undefined" != typeof c && 0 != b.closest(".wishlist_table").length && (c.remove_from_wishlist_after_add_to_cart = b.closest("[data-row-id]").data("row-id"), c.wishlist_id = b.closest(".wishlist_table").data("id"), wc_add_to_cart_params.cart_redirect_after_add = yith_wcwl_l10n.redirect_to_cart)
		});
		a.on("added_to_cart", "body", function (a) {
			wc_add_to_cart_params.cart_redirect_after_add = C;
			a = b(".wishlist_table");
			a.find(".added").removeClass("added");
			a.find(".added_to_cart").remove()
		});
		a.on("added_to_cart", "body", u);
		a.on("cart_page_refreshed", "body", n);
		a.on("click", ".show-title-form", t);
		a.on("click", ".wishlist-title-with-form h2", t);
		a.on("click", ".hide-title-form", A);
		a.on("change", ".change-wishlist", function (a) {
			a = b(this);
			z(a);
			return !1
		});
		a.on("change", ".yith-wcwl-popup-content .wishlist-select", function (a) {
			a = b(this);
			"new" == a.val() ? a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").css("display", "table-row") : a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").hide()
		});
		a.on("change", "#bulk_add_to_cart", function () {
			b(this).is(":checked") ? c.attr("checked", "checked").change() : c.removeAttr("checked").change()
		});
		a.on("click", "#custom_add_to_cart", function (a) {
			var d = b(this),
				f = d.parents(".cart.wishlist_table");
			yith_wcwl_l10n.ajax_add_to_cart_enabled && (a.preventDefault(), "undefined" != typeof b.fn.block && f.fadeTo("400", "0.6").block({
				message: null,
				overlayCSS: {
					background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
					backgroundSize: "16px 16px",
					opacity: .6
				}
			}), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + d.attr("href") + " #yith-wcwl-form", {
				action: yith_wcwl_l10n.actions.bulk_add_to_cart_action
			}, function () {
				"undefined" != typeof b.fn.unblock && f.stop(!0).css("opacity", "1").unblock();
				c.off("change");
				c = b('.wishlist_table tbody input[type="checkbox"]');
				"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
				p();
				l()
			}))
		});
		a.on("click", ".yith-wfbt-add-wishlist", function (a) {
			a.preventDefault();
			a = b(this);
			var c = b("#yith-wcwl-form");
			b("html, body").animate({
				scrollTop: c.offset().top
			}, 500);
			y(a, c)
		});
		B();
		p();
		l()
	}).trigger("yith_wcwl_init");
	b(document).on("yith_infs_added_elem", function () {
		l()
	});
	"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox()
});
var addComment = {
	moveForm: function (a, b, c, d) {
		var e, f, g, h, i = this,
			j = i.I(a),
			k = i.I(c),
			l = i.I("cancel-comment-reply-link"),
			m = i.I("comment_parent"),
			n = i.I("comment_post_ID"),
			o = k.getElementsByTagName("form")[0];
		if (j && k && l && m && o) {
			i.respondId = c, d = d || !1, i.I("wp-temp-form-div") || (e = document.createElement("div"), e.id = "wp-temp-form-div", e.style.display = "none", k.parentNode.insertBefore(e, k)), j.parentNode.insertBefore(k, j.nextSibling), n && d && (n.value = d), m.value = b, l.style.display = "", l.onclick = function () {
				var a = addComment,
					b = a.I("wp-temp-form-div"),
					c = a.I(a.respondId);
				if (b && c) return a.I("comment_parent").value = "0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display = "none", this.onclick = null, !1
			};
			try {
				for (var p = 0; p < o.elements.length; p++)
					if (f = o.elements[p], h = !1, "getComputedStyle" in window ? g = window.getComputedStyle(f) : document.documentElement.currentStyle && (g = f.currentStyle), (f.offsetWidth <= 0 && f.offsetHeight <= 0 || "hidden" === g.visibility) && (h = !0), "hidden" !== f.type && !f.disabled && !h) {
						f.focus();
						break
					}
			} catch (q) {}
			return !1
		}
	},
	I: function (a) {
		return document.getElementById(a)
	}
};
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function (b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function (b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function (b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.5", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function (a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this
	};
	var e = function (c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
		}))
	}

	function d(b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
	"use strict";

	function b(b, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function (b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function (b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function (b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function () {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState)
			if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide())
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function () {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function (a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function () {
		return this.getTitle()
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
				top: 0,
				left: 0
			} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function (a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function () {
		this.enabled = !0
	}, c.prototype.disable = function () {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function (b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function () {
		var a = this;
		clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.5", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function () {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
			d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this
	};
	var e = function (c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
		if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
! function (e) {
	function t() {
		var e = location.href;
		return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
	}

	function i() {
		"undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
	}

	function p() {
		-1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
	}

	function o(e, t) {
		e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var i = "[\\?&]" + e + "=([^&#]*)",
			p = new RegExp(i),
			o = p.exec(t);
		return null == o ? "" : o[1]
	}
	e.prettyPhoto = {
		version: "3.1.6"
	}, e.fn.prettyPhoto = function (a) {
		function s() {
			e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
				height: f.contentHeight,
				width: f.contentWidth
			}, settings.animation_speed), $pp_pic_holder.animate({
				top: projectedTop,
				left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
				width: f.containerWidth
			}, settings.animation_speed, function () {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
			}), m(), a.ajaxcallback()
		}

		function n(t) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
				e(".pp_loaderIcon").show(), t()
			})
		}

		function r(t) {
			t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
		}

		function l(e, t) {
			if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
				for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
				(k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(b),
				containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
				contentHeight: Math.floor(y),
				contentWidth: Math.floor(w),
				resized: resized
			}
		}

		function d(t, i) {
			t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			}), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			}), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
		}

		function h(e) {
			return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
		}

		function c() {
			if (doresize && "undefined" != typeof $pp_pic_holder) {
				if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
				$pp_pic_holder.css({
					top: projectedTop,
					left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
				})
			}
		}

		function _() {
			return self.pageYOffset ? {
				scrollTop: self.pageYOffset,
				scrollLeft: self.pageXOffset
			} : document.documentElement && document.documentElement.scrollTop ? {
				scrollTop: document.documentElement.scrollTop,
				scrollLeft: document.documentElement.scrollLeft
			} : document.body ? {
				scrollTop: document.body.scrollTop,
				scrollLeft: document.body.scrollLeft
			} : void 0
		}

		function g() {
			I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
		}

		function m() {
			isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
		}

		function u() {
			if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
				currentGalleryPage = 0, toInject = "";
				for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
					return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
				}), $pp_gallery.find(".pp_arrow_previous").click(function () {
					return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
				}), $pp_pic_holder.find(".pp_content").hover(function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				}), itemWidth = 57, $pp_gallery_li.each(function (t) {
					e(this).find("a").click(function () {
						return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
					})
				})
			}
			settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
				return e.prettyPhoto.startSlideshow(), !1
			})), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
				opacity: 0,
				height: e(document).height(),
				width: e(window).width()
			}).bind("click", function () {
				settings.modal || e.prettyPhoto.close()
			}), e("a.pp_close").bind("click", function () {
				return e.prettyPhoto.close(), !1
			}), settings.allow_expand && e("a.pp_expand").bind("click", function () {
				return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
					e.prettyPhoto.open()
				}), !1
			}), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
				return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
			}), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
				return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
			}), c()
		}
		a = jQuery.extend({
			hook: "rel",
			animation_speed: "fast",
			ajaxcallback: function () {},
			slideshow: 5e3,
			autoplay_slideshow: !1,
			opacity: .8,
			show_title: !0,
			allow_resize: !0,
			allow_expand: !0,
			default_width: 500,
			default_height: 344,
			counter_separator_label: "/",
			theme: "pp_default",
			horizontal_padding: 20,
			hideflash: !1,
			wmode: "opaque",
			autoplay: !0,
			modal: !1,
			deeplinking: !0,
			overlay_gallery: !0,
			overlay_gallery_max: 30,
			keyboard_shortcuts: !0,
			changepicturecallback: function () {},
			callback: function () {},
			ie6_fallback: !0,
			markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, a);
		var f, v, y, w, b, k, P, x = this,
			$ = !1,
			I = e(window).height(),
			j = e(window).width();
		return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
			c(), g()
		}), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
			if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
				case 37:
					e.prettyPhoto.changePage("previous"), t.preventDefault();
					break;
				case 39:
					e.prettyPhoto.changePage("next"), t.preventDefault();
					break;
				case 27:
					settings.modal || e.prettyPhoto.close(), t.preventDefault()
			}
		}), e.prettyPhoto.initialize = function () {
			return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function (t) {
				return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
			}) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (t) {
				return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
			}) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (t) {
				return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
			}) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function () {
				c()
			}), e.prettyPhoto.open(), !1
		}, e.prettyPhoto.open = function (t) {
			return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
				switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
							f = l(imgPreloader.width, imgPreloader.height), s()
						}, imgPreloader.onerror = function () {
							alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
						}, imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						f = l(movie_width, movie_height), movie_id = pp_images[set_position];
						var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
							i = movie_id.match(t);
						movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
						break;
					case "quicktime":
						f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function (e) {
							toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
						});
						break;
					case "custom":
						f = l(movie_width, movie_height), toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
				}
				imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
			}), !1
		}, e.prettyPhoto.changePage = function (t) {
			currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
				e.prettyPhoto.open()
			})
		}, e.prettyPhoto.changeGalleryPage = function (e) {
			"next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		}, e.prettyPhoto.startSlideshow = function () {
			"undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
				return e.prettyPhoto.stopSlideshow(), !1
			}), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
		}, e.prettyPhoto.stopSlideshow = function () {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
				return e.prettyPhoto.startSlideshow(), !1
			}), clearInterval(P), P = void 0
		}, e.prettyPhoto.close = function () {
			$pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
				e(this).remove()
			}), $pp_overlay.fadeOut(settings.animation_speed, function () {
				settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
			}))
		}, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
			e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
		}, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
	}
}(jQuery);
var pp_alreadyInitialized = !1;
(function () {
	"use strict";

	function a() {}

	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c].listener === b) return c;
		return -1
	}

	function c(a) {
		return function () {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function (a) {
		var b, c, d = this._getEvents();
		if ("object" == typeof a) {
			b = {};
			for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else b = d[a] || (d[a] = []);
		return b
	}, d.flattenListeners = function (a) {
		var b, c = [];
		for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
		return c
	}, d.getListenersAsObject = function (a) {
		var b, c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c), b || c
	}, d.addListener = function (a, c) {
		var d, e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
			listener: c,
			once: !1
		});
		return this
	}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
		return this.getListeners(a), this
	}, d.defineEvents = function (a) {
		for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
		return this
	}, d.removeListener = function (a, c) {
		var d, e, f = this.getListenersAsObject(a);
		for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	}, d.off = c("removeListener"), d.addListeners = function (a, b) {
		return this.manipulateListeners(!1, a, b)
	}, d.removeListeners = function (a, b) {
		return this.manipulateListeners(!0, a, b)
	}, d.manipulateListeners = function (a, b, c) {
		var d, e, f = a ? this.removeListener : this.addListener,
			g = a ? this.removeListeners : this.addListeners;
		if ("object" != typeof b || b instanceof RegExp)
			for (d = c.length; d--;) f.call(this, b, c[d]);
		else
			for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
		return this
	}, d.removeEvent = function (a) {
		var b, c = typeof a,
			d = this._getEvents();
		if ("string" === c) delete d[a];
		else if ("object" === c)
			for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
		else delete this._events;
		return this
	}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
		var c, d, e, f, g = this.getListenersAsObject(a);
		for (e in g)
			if (g.hasOwnProperty(e))
				for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
		return this
	}, d.trigger = c("emitEvent"), d.emit = function (a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	}, d.setOnceReturnValue = function (a) {
		return this._onceReturnValue = a, this
	}, d._getOnceReturnValue = function () {
		return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
	}, d._getEvents = function () {
		return this._events || (this._events = {})
	}, a.noConflict = function () {
		return e.EventEmitter = f, a
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return a
	}) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
	function (a) {
		function b(b) {
			var c = a.event;
			return c.target = c.target || c.srcElement || b, c
		}
		var c = document.documentElement,
			d = function () {};
		c.addEventListener ? d = function (a, b, c) {
			a.addEventListener(b, c, !1)
		} : c.attachEvent && (d = function (a, c, d) {
			a[c + d] = d.handleEvent ? function () {
				var c = b(a);
				d.handleEvent.call(d, c)
			} : function () {
				var c = b(a);
				d.call(a, c)
			}, a.attachEvent("on" + c, a[c + d])
		});
		var e = function () {};
		c.removeEventListener ? e = function (a, b, c) {
			a.removeEventListener(b, c, !1)
		} : c.detachEvent && (e = function (a, b, c) {
			a.detachEvent("on" + b, a[b + c]);
			try {
				delete a[b + c]
			} catch (d) {
				a[b + c] = void 0
			}
		});
		var f = {
			bind: d,
			unbind: e
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
	}(this),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
	}(window, function (a, b, c) {
		function d(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}

		function e(a) {
			return "[object Array]" == l.call(a)
		}

		function f(a) {
			var b = [];
			if (e(a)) b = a;
			else if ("number" == typeof a.length)
				for (var c = 0; c < a.length; c++) b.push(a[c]);
			else b.push(a);
			return b
		}

		function g(a, b, c) {
			if (!(this instanceof g)) return new g(a, b, c);
			"string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
			var e = this;
			setTimeout(function () {
				e.check()
			})
		}

		function h(a) {
			this.img = a
		}

		function i(a, b) {
			this.url = a, this.element = b, this.img = new Image
		}
		var j = a.jQuery,
			k = a.console,
			l = Object.prototype.toString;
		g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
			this.images = [];
			for (var a = 0; a < this.elements.length; a++) {
				var b = this.elements[a];
				this.addElementImages(b)
			}
		}, g.prototype.addElementImages = function (a) {
			"IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
			var b = a.nodeType;
			if (b && m[b]) {
				for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
					var e = c[d];
					this.addImage(e)
				}
				if ("string" == typeof this.options.background) {
					var f = a.querySelectorAll(this.options.background);
					for (d = 0; d < f.length; d++) {
						var g = f[d];
						this.addElementBackgroundImages(g)
					}
				}
			}
		};
		var m = {
			1: !0,
			9: !0,
			11: !0
		};
		g.prototype.addElementBackgroundImages = function (a) {
			for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
				var e = d && d[1];
				e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
			}
		};
		var n = a.getComputedStyle || function (a) {
			return a.currentStyle
		};
		return g.prototype.addImage = function (a) {
			var b = new h(a);
			this.images.push(b)
		}, g.prototype.addBackground = function (a, b) {
			var c = new i(a, b);
			this.images.push(c)
		}, g.prototype.check = function () {
			function a(a, c, d) {
				setTimeout(function () {
					b.progress(a, c, d)
				})
			}
			var b = this;
			if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
			for (var c = 0; c < this.images.length; c++) {
				var d = this.images[c];
				d.once("progress", a), d.check()
			}
		}, g.prototype.progress = function (a, b, c) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
		}, g.prototype.complete = function () {
			var a = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
				var b = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[b](this)
			}
		}, h.prototype = new b, h.prototype.check = function () {
			var a = this.getIsImageComplete();
			return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
		}, h.prototype.getIsImageComplete = function () {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, h.prototype.confirm = function (a, b) {
			this.isLoaded = a, this.emit("progress", this, this.img, b)
		}, h.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, h.prototype.onload = function () {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, h.prototype.onerror = function () {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, h.prototype.unbindEvents = function () {
			c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
		}, i.prototype = new h, i.prototype.check = function () {
			c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
			var a = this.getIsImageComplete();
			a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, i.prototype.unbindEvents = function () {
			c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
		}, i.prototype.confirm = function (a, b) {
			this.isLoaded = a, this.emit("progress", this, this.element, b)
		}, g.makeJQueryPlugin = function (b) {
			b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function (a, b) {
				var c = new g(this, a, b);
				return c.jqDeferred.promise(j(this))
			})
		}, g.makeJQueryPlugin(), g
	});
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var n = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return o(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
					r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				I = a.borderTopWidth + a.borderBottomWidth,
				z = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (z ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
				n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "object" == typeof t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function (t, e, i) {
		var o = t.prototype[e],
			n = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[n];
			t && clearTimeout(t);
			var e = arguments,
				s = this;
			this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var o = t.console;
	return i.htmlInit = function (e, n) {
		i.docReady(function () {
			var s = i.toDashed(n),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, n, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = this.layout.size,
			r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
			a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
		r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom",
			h = o ? "top" : "bottom",
			d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = parseInt(t, 10),
			s = parseInt(e, 10),
			r = n === this.position.x && s === this.position.y;
		if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			u = e - o,
			h = {};
		h.transform = this.getTranslate(a, u), this.transition({
			to: h,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, o
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
				r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}
		var n = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h)
			if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			o = this._boundingRect,
			n = i(t),
			s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function () {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function (t, e) {
		var i = t + e,
			o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			s = n / o,
			r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols,
			o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, o._manageStamp = function (t) {
		var i = e(t),
			o = this._getElementOffset(t),
			n = this._getOption("originLeft"),
			s = n ? o.left : o.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		o = i.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
					r = i.sortData[s],
					a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			o = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t)
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				o = i[0],
				n = o.match(/^\[(.+)\]$/),
				s = n && n[1],
				r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/
 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
